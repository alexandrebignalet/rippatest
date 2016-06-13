module.exports = Matrice

function Matrice(size) {
	this.size = size
	this.tab = []

	for( var x = 0 ; x < size ; x++ ){
		this.tab.push([])
		for( var y = 0 ; y < size ; y++){
			this.tab[x].push([])
			for( var z = 0 ; z < size ; z++){
				this.tab[x][y].push([])
			}
		}
	}
	this.init()
}

Matrice.prototype.init = function() {
	for( var x = 0 ; x < this.size ; x++ ){
		for( var y = 0 ; y < this.size ; y++){
			for( var z = 0 ; z < this.size ; z++){
				this.tab[x][y][z] = 0
			}
		}
	}
};

Matrice.prototype.setPoint = function(x,y,z, val){
	if( val > 1000000000 ){
		return console.log('Error: Update input value to high')
	}
	this.tab[x-1][y-1][z-1] = +val
}

Matrice.prototype.getPoint = function(x,y,z){
	return +this.tab[x-1][y-1][z-1]
}

Matrice.prototype.display = function(){
	for( var x = 0 ; x < this.size ; x++ ){
		for( var y = 0 ; y < this.size ; y++){
			for( var z = 0 ; z < this.size ; z++){
				console.log(this.tab[x][y][z])
			}
		}
	}
}

Matrice.prototype.getDiffBetweenTwoValues = function(val1, val2) {
	var res = []
	var first, second

	if( val1 < val2 ) {
		first = val1
		second = val2
	}
	else {
		first = val2
		second = val1
	}
	
	while(first <= second){
		res.push(first)
		first++;
	}

	return res
}

// the parameter list must be a 6 length list containing integers
// those last are the 6 integers of QUERY test case, they must not be sorted 
Matrice.prototype.query = function(IntegerList) {
	if(IntegerList.length !== 6){
		return console.log('Error: check the input of Query function')
	}

	for(var i = 0 ; i < IntegerList.length ; i++){
		if(IntegerList[i] > this.size){
			return console.log('Error: A point seleted isnt in the matrice ')
		}
	}

	var absTab = this.getDiffBetweenTwoValues( IntegerList[0], IntegerList[3] )
	var ordTab = this.getDiffBetweenTwoValues( IntegerList[1], IntegerList[4] )
	var depthTab = this.getDiffBetweenTwoValues( IntegerList[2], IntegerList[5] )

	if(absTab.lentgh !== ordTab.lentgh && absTab.lentgh !== depthTab.length && ordTab.lentgh !== depthTab.length){
		return console.log('Error: query input is not correct')
	}

	var sum = 0;
	for(var i = 0 ; i < absTab.length ; i++){
		sum += this.getPoint(absTab[i],ordTab[i],depthTab[i])
	}

	return sum
}


/// TESTS ///
console.log('TESTS Matrice Class')
var matrice = new Matrice(4)
if(typeof matrice === typeof new Matrice(0)){console.log('PASSED: ')}else{console.log('FAILED: ')}
console.log('should create a new matrice object');


matrice.setPoint(1,1,1, 12)
if(matrice.getPoint(1,1,1) === 12){console.log('PASSED: ')}else{console.log('FAILED: ')}
console.log('should set the value 12 in x = 1, y = 1, z = 1');


//should display 36 values, all initialized at 0 and one at 12 
matrice.display()

//
var res = matrice.getDiffBetweenTwoValues(1,5)
if(res.length === 5){console.log('PASSED: ')}else{console.log('FAILED: ')}
console.log('should print all the values between val1 and val2 included --> ', res);

// should print 12
var integerList = [1,1,1,3,3,3]
var sum = matrice.query(integerList)
if(sum === 12){console.log('PASSED: ')}else{console.log('FAILED: ')}
console.log('should the sum of the values of the points between (1,1,1) and (3,3,3) and print 12')
console.log('********************  END Tests  ********************')
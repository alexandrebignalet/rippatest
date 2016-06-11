module.exports = Testcase
var Matrice = require('./classMatrice.js')

function Testcase(input) {
	this.output = []
	this.input = this.formatInput(input)
	this.casesCount = +input.slice(0,1)
	this.matSize = +input.slice(0,1)
	this.operationsCount = +input.slice(0,1)
	this.matrice = new Matrice(this.matSize)

	this.decodeInput()
}

Testcase.prototype.formatInput = function(input){
	input = input.replace(/(\r)/gm,"");
	return input.replace(/(\n)/gm," ");
}

Testcase.prototype.decodeInput = function(){

	while( ( this.casesCount != 0 && this.input.length > 0 ) || operation === 'quit'){
		var operation = this.input.slice(0,1);
		console.log('operation: ',operation, this.input)
		switch(operation){
			case 'UPDATE':
				var x = this.input.slice(0,1)
				var y = this.input.slice(0,1)
				var z = this.input.slice(0,1)
				var val = this.input.slice(0,1)

				this.matrice.setPoint(x,y,z,val)
				console.log( getPoint(x,y,z) )
				break;
			case 'QUERY':
			var integerList
				for(var i = 0; i < 6; i++){
					integerList.push(this.input.slice(0,1))
				}
				console.log( this.matrice.query(integerList) )
				break;
			case 'quit':
				console.log('acabado')
				//call output function
				break;
			case ' ':
				console.log('acabado')
				//call output function
				break;
			default:
				this.matSize = +this.input.slice(0,1)
				this.operationsCount = +this.input.slice(0,1)
				this.matrice = new Matrice(this.matSize)
				this.casesCount--;
				break;
		}
	}
}


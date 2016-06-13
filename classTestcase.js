module.exports = Testcase
var Matrice = require('./classMatrice.js')
	fs		= require('fs');

function Testcase(input) {
	this.output = []
	this.input = this.formatInput(input)
	this.casesCount = +this.input.shift()
	this.matSize = +this.input.shift()
	this.operationsCount = +this.input.shift()
	this.matrice = new Matrice(this.matSize)
}

Testcase.prototype.formatInput = function(input){
	input = input.replace(/(\r)(\t)/gm,"").replace(/(\n)/gm," ");
	return input.split(" ");
}

Testcase.prototype.decodeInput = function(commandLineDisplay){

	var res = []
	while( ( this.casesCount != 0 && this.input.length > 0 ) || operation === 'quit'){
		var operation = this.input.shift()

		switch(operation){
			case 'UPDATE':
				var x = this.input.shift()
				var y = this.input.shift()
				var z = this.input.shift()
				var val = this.input.shift()

				this.matrice.setPoint(x,y,z,val)
				break;
			case 'QUERY':
				var integerList = []
				for(var i = 0; i < 6; i++){
					integerList.push( +this.input.shift() )
				}
				res.push(this.matrice.query(integerList))
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
				this.matSize = +operation
				this.operationsCount = +this.input.shift()
				this.matrice = new Matrice(this.matSize)
				this.casesCount--;
				break;
		}
	}

	if( commandLineDisplay === true ){
		for(var i = 0 ; i < res.length; i++){
			console.log(res[i])
		}
	}
	else {
		return res;
	}
}


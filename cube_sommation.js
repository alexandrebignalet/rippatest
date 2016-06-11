'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');
var util = require('util');
var Testcase = require('./classTestcase.js')

//Input reader
var _input = [];
process.stdin.on("data", function (input) {
	//console.log('received data:', util.inspect(input));
	_input.push(input)

	if(input === 'quit\r\n'){
		processData(_input)
	}
});

process.stdin.on("end", function () {
   processData(_input);
});

function processData(input){
	var testcase = new Testcase(input);
}

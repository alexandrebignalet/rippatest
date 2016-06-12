'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');

var http 	   = require('http'),
	fs 		   = require('fs'),
	port       = process.env.PORT || 3000,
	util 	   = require('util'),
	Testcase   = require('./classTestcase.js');

// bodyParser = require('body-parser'),
// 	express    = require('express'),
//     app        = express(),
// app.set('port', port)
// app.set('views', 'views')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}))

// app.listen(app.get('port'), function() {
//   console.log('Express server listening on port ' + app.get('port'))
// })

//Input reader
var _input = [];

process.stdin.on("data", function(input) {
	//console.log('received data:', util.inspect(input));
	_input += input;

	if(input === 'quit\r\n'){
		processData(_input);
	}
});

process.stdin.on("end", function()  {
	
});

function processData(input) {
	console.log('\nOutput: \n')
	var testcase = new Testcase(input);
}



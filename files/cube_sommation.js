'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');

var http 	   = require('http'),
	fs 		   = require('fs'),
	readline = require('readline'),
	port       = process.env.PORT || 3000,
	util 	   = require('util'),
	Testcase   = require('./classTestcase.js'),
	bodyParser = require('body-parser'),
	busboy = require('connect-busboy'), //middleware for form/file upload
	path = require('path'),     //used for file path
	express    = require('express'),
    app        = express(),
	open = require('open');

app.set('port', port)
app.set('view engine', 'ejs');
app.use(busboy());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// http request reader
var lastUploadedFilename = '';
var server = app.listen(3000, function() {
    console.log('\nListening on port %d', server.address().port+'\n');
    open('http://localhost:3000/');
});

app.route('/')
    .get(function (req, res) {
    	res.render('./index', { outputData: []})
    });

app.route('/output')
    .get(function (req, res) {
    	var _uploadedFile = [];
    	var outputData = [];

    	if(lastUploadedFilename === ''){
    		res.redirect('back')
    	}
		var rd = readline.createInterface({
		    input: fs.createReadStream('./files/'+lastUploadedFilename),
		    output: process.stdout,
		    terminal: false
		});

		rd.on('line', function(line) {
			_uploadedFile += line+'\n';
		});

		rd.on('close', function() {
			console.log('\nReading file : ./files/'+lastUploadedFilename+'\n')
			outputData = processData(_uploadedFile, false)
    		res.render('./index', { outputData: outputData})
		});
    });

app.route('/upload')
    .post(function (req, res) {

        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            console.log("\nUploading: " + filename);

            //Path where image will be uploaded
            fstream = fs.createWriteStream(__dirname + '/files/' + filename);
            file.pipe(fstream);

            fstream.on('close', function () {    
                console.log("Upload Finished of " + filename);
                lastUploadedFilename = filename;
                res.redirect('/output');
            });
        });
    });



//Input reader
var _input = [];

process.stdin.on("data", function(input) {
	_input += input;

	if(input === 'quit\r\n'){
		console.log('\nReading user input\n')
		processData(_input, true);
	}
});

function processData(input, commandLineDisplay) {
	console.log('\nOutput: \n')
	var testcase = new Testcase(input);
	var res = testcase.decodeInput(commandLineDisplay);

	if(!commandLineDisplay){
		console.log(res)
		return res
	}
	
}


// FILE READ
var _fileInput = [];

var rd = readline.createInterface({
    input: fs.createReadStream('./files/file.txt'),
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line) {
	_fileInput += line+'\n';
});

rd.on('close', function() {
	console.log('\nReading file at ./file.txt\n')
	console.log(_fileInput)
	processData(_fileInput, true);
});


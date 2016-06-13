# code-rippa-test

This project is an JavaScript implementation of this [hackerrank](https://www.hackerrank.com/challenges/cube-summation)
problem.

## Git repo

Clone this repo : git clone https://github.com/alexandrebignalet/rippatest.git

## NodeJS

Run `node cube_sommation.js` to launch the program.

## Implementation

###classMatrice.js

Contains the implementation of the class Matrice which allow to create a new N*N*N matrix.

Getters and Setters allow to put or retrieve data from the matrix.

The method "query" return the sum of the points values between two others those last included.

###classTestcase.js

Contains the implementation of the class Testcase which will instanciate a new bunch of testcases.

The format method will format the input as an array to decode it further.

The decodeInput method will  analyze the input formatted to update and query a matrix.

###cube_sommation.js

This file implements the main of the app.

The program accept multiple types of input:

- from a local file
- from an uploaded file
- from a command line input
- form a webview input

This file contains a route system allowing the upload and webview input operations.
Then an stdin system allowing user input from the command line.
A local file read is also available.

For the command line input:

- Windows OS
Paste a sample of input then write < quit > and press enter to load the analyze.
- UNIX OS
Paste a sample of input then Ctrl+D to load the analyze.

For webview input:

-Upload a file containing a formatted input and click 'Upload'
-Paste a formatted input in the text input and click 'Envoyer'

For 

## Testing

Some tests are executed with the program.

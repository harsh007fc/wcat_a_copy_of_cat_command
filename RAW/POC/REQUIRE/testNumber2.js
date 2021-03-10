
let readline = require('readline');
let input  = process.argv.slice(2);

let dirpath  = input[0];

// var count = 0;


var c = 1;
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(dirpath)
});
lineReader.on('line', function (line) {
    // ++count;  // keep a count of number of lines
    if (line.length > 0) {
        console.log(c, line);
        c++;
        // count++;
    }
});
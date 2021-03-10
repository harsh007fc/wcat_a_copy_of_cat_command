let fs = require('fs');
let readline =  require('readline');

function printContent(dirpath)
{
    let data = fs.readFileSync(dirpath, {encoding:'utf8', flag:'r'});
    console.log(data);
}


function lineBreak(dirpath)
{
    let data = fs.readFileSync(dirpath, {encoding:'utf8', flag:'r'});
    data = data.replace(/\n\s*\n/g, '\n');
    console.log(data);
}

function lineNumber2(dirpath)
{
    let c = 1;
    let lineReader = readline.createInterface({
        input: fs.createReadStream(dirpath)
    });
    lineReader.on('line', function (line) {
        // ++count;  // keep a count of number of lines
        if (line.length > 0) {
            console.log(c + "->" + line);
            c++;
            // count++;
        }
    });
}



function lineNumber1(dirpath)
{
    let data = fs.readFileSync(dirpath, {encoding:'utf8', flag:'r'});
    let lines = data.split("\n");
    for(let lineNumber = 0; lineNumber < lines.length; lineNumber ++){
    console.log(lineNumber +"->"+ lines[lineNumber]);
    }
}

module.exports = 
{
    printContentFn : printContent,
    lineBreakFn :  lineBreak,
    lineNumber1Fn : lineNumber1,
    lineNumber2Fn : lineNumber2
}
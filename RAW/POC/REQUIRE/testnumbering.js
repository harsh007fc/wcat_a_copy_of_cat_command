// var lines = this.result.split('\n');
// for(var lineNumber = 0; lineNumber < lines.length; lineNumber ++){
//     console.log(lines[lineNumber]);



// (/\r? \n/)


let fs = require('fs');
let input  = process.argv.slice(2);

let dirpath  = input[0];


function lineNumber(dirpath)
{
    let data = fs.readFileSync(dirpath, {encoding:'utf8', flag:'r'});
    let lines = data.split("\n");
    for(let lineNumber = 0; lineNumber < lines.length; lineNumber ++){
    console.log(lineNumber +"  "+ lines[lineNumber]);
    }
    // console.log(data);
}


function lineNumberoffilledlines(dirpath)
{
    let data = fs.readFileSync(dirpath, {encoding:'utf8', flag:'r'});
    let lines = data.split("\n");
    let count = 1;
    for(let lineNumber = 0; lineNumber < lines.length; lineNumber ++)
    {
        if(lines[lineNumber].toString.length = 0)
        {
            console.log(count +"  "+ lines[lineNumber]);
            count++;
        }
        else{
            console.log(count +"  "+ lines[lineNumber]);
        }
    }
    // console.log(data);
}


// lineNumber(dirpath);
lineNumberoffilledlines(dirpath)
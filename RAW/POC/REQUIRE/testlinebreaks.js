// To replace all the extra line breaks and leave only one use:

// myText = myText.replace(/\n\n*/g,'\r\n');​​​​​​​



let fs = require('fs');

let input  = process.argv.slice(2);

let dirpath  = input[0];

function lineBreak(dirpath)
{
    let data = fs.readFileSync(dirpath, {encoding:'utf8', flag:'r'});
    data = data.replace(/\n\s*\n/g, '\n');
    console.log(data);
}

lineBreak(dirpath);

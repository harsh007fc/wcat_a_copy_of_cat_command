let fs = require('fs');
let input  = process.argv.slice(2);

let dirpath  = input[0];


// let dirpath = "D:\\ACTIVITY\\RAW\\POC\\REQUIRE\\d10\\d30\\d50\\text.txt"
function printContent(dirpath)
{
    let data = fs.readFileSync(dirpath, {encoding:'utf8', flag:'r'});
    console.log(data);
}
// let data = fs.readFileSync(dirpath, {encoding:'utf8', flag:'r'});
// console.log(data);

printContent(dirpath);
module.exports = 
{
    printContentFn : printContent
}
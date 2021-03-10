let fs = require('fs');
let input  = process.argv.slice(2);

let dirpath  = input[0];


// let dirpath = "D:\\bhep codes\\home work of dev\\hw1\\ACTIVITY\\RAW\\POC\\REQUIRE\\d10\\d30\\d50\\text.txt"
let data = fs.readFileSync(dirpath, {encoding:'utf8', flag:'r'});
console.log(data);
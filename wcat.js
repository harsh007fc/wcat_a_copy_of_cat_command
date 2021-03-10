let printContentObj = require("./COMMANDS/printcontent");
let helpfnObj = require("./COMMANDS/help");
let lineBreakObj = require("./COMMANDS/printcontent");
let lineNumber1FnObj = require("./COMMANDS/printcontent");
let lineNumber2FnObj = require("./COMMANDS/printcontent");
const { lineBreakFn } = require("./COMMANDS/printcontent");

let input = process.argv.slice(2);
let cmd = input[0];
switch(cmd)
{
    case "read":
        printContentObj.printContentFn(input[1]);
        break;
    case "readall":
        for(let i=1;i<input.length;i++)
        {
            printContentObj.printContentFn(input[i]);
        }
        break;
    case "-s":
        lineBreakObj.lineBreakFn(input[1]); ""
        break; 
    case "help":
        helpfnObj.helpFn();
                break;
    case "-n":
        lineNumber1FnObj.lineNumber1Fn(input[1]);
        break;
    case "-b":
        lineNumber2FnObj.lineNumber2Fn(input[1]);
        break;
    default:
        console.log("Wrong command entered");
        break;    
}
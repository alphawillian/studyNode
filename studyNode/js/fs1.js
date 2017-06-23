var fs = require("fs");

var data = fs.readFileSync('../note.txt');

console.log(data.toString());
console.log("程序执行结束!");
console.log("this is for test commit2");

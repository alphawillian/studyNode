var fs = require("fs");
var readerStream = fs.createReadStream("../test.txt");
var writerStream = fs.createWriteStream("../output1.txt");
readerStream.pipe(writerStream);
console.log("The program has been executed");

var fs = require("fs");
var zlib = require("zlib");
fs.createReadStream("../test.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("../input.txt"));
console.log("file decompress complete");

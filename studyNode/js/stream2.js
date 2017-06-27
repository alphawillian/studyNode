var fs = require("fs");
var data = "As long as you are willing.";
var writerStream = fs.createWriteStream("../output.txt");
writerStream.write(data,"UTF8");
writerStream.end();
writerStream.on("finish",function(){
	console.log("write complete");
});
writerStream.on("error",function(err){
	console.log(err.stack);
})
console.log("The program has been executed");

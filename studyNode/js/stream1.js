var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("../te1st.txt");
readerStream.setEncoding("UTF8");
readerStream.on("data",function(chunk){
	data += chunk;
})
readerStream.on("end",function(){
	console.log(data);
})
readerStream.on("error",function(err){
	console.log(err);
	console.log("execution error");
})
console.log("The program has been executed.");

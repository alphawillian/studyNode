var fs = require("fs");
fs.readFile("../note.txt",function(err,data){
	if(err){
		return console.log(err);
	}else{
		var str = data.toString();
		console.log(str);
	}
	console.log("this is after else");
})
console.log("this is after fs.readFile");


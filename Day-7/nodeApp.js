var fs = require("fs"),
	http = require("http"),
	url = require("url"),
	path = require("path");

var server = http.createServer(function(req,res){
	var requestedResource = path.join(__dirname,url.parse(req.url).pathname);
	if (fs.existsSync(requestedResource)){
		var readStream = fs.createReadStream(requestedResource);
		readStream.pipe(res);
	} else {
		res.end(404);
	}
});
server.listen(9090);

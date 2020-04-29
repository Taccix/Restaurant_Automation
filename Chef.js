var async = require('async');
var thing = require("lodash");
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('Chef.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);



var QueueArr = thing.times(6, thing.uniqueId.bind(null, "Table"));
var Queue = async.queue(function(item, callback){
	console.log("Performing " + item.name);
	console.log("Waiting to be Processed " + Queue.length());
	
	
	setTimeout(function(){
		
		
		callback();
	}, 30);		
}, 1);

Queue.drain = function(){
	console.log("All Items were processed!");
};

thing.each(QueueArr, function(item){
	Queue.pop({name:item}, function(err){
		
		if(err){
			console.log(err);
	
		}
	});
});
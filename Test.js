var async = require('async');
var thing = require("lodash");
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
	Queue.push({name:item}, function(err){
		
		if(err){
			console.log(err);
	
		}
	});
});
var async = require('async');
var thing = require("lodash");

const express = require("express");

const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Taccix:montclair@cluster0-ofqeg.mongodb.net/test',  { useNewUrlParser: true }, () => 

console.log("Connected to Database")


);
//Queue Code
var QueueArr = thing.times(6, thing.uniqueId.bind(null, "Table"));
var Queue = async.queue(function(tablestatus, callback){
	console.log("Performing " + tablestatus);
	console.log("Waiting to be Processed " + Queue.length());
	
	
	setTimeout(function(){
		
		
		callback();
	}, 30);		
}, 1);

Queue.drain = function(){
	console.log("All Items were processed!");
};

thing.each(QueueArr, function(tablestatus){
	Queue.push({name:tablestatus}, function(err){
		
		if(err){
			console.log(err);
		}
	});
});
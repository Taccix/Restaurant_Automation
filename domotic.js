exports.connect = connect;
exports.command = command;
exports.disconnect = disconnect;

function connect(cb){
	
	setTimeout(cb, 100);
}

function command(cmd, options, cb){
	if(succeeds()){
		
	setTimeout(cb, 100);	
	}else{
	setTimeout(function(){
		
		var err = Error('Connection Error');
		err.code = "ECONN";
		cb(err);
	
	
}, 100);
	
	
	
}
}

function disconnect(cb){
	if(cb)
		setTimeout(cb, 100);
}

function succeeds(){
	return Math.random() > 0.5;
	
}
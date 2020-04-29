var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


// Starting and connecting our Database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
 var dbo = db.db("mydb");

// Creating a Collection for items 
  dbo.createCollection("items", function(err, res) {
    if (err) throw err;
    console.log("Items Collection Created!");
  });


// This is for the table
  var tables = 
 [{
  	tableid:"1",
  	tableOrder: "NAN",
    tableStatus : "Vacant"
  },
  {
  	tableid:"2",
  	tableOrder: "NAN",
    tableStatus : "Vacant"
  },
  {
  	tableid:"3",
  	tableOrder: "NAN",
    tableStatus : "Vacant"
  },
  {
  	tableid:"4",
  	tableOrder: "NAN",
    tableStatus : "Vacant"
  },
  {
  	tableid:"5",
  	tableOrder: "NAN",
    tableStatus : "Vacant"
  },
  {
  	tableid:"6",
  	tableOrder: "NAN",
    tableStatus : "Vacant"
  }
  ];

  var items = 
  [{
 	  id : "1",
 	  name : "Chicken Nuggets",
 	  quantity : "100"
 }, 

 {
 	id : "2",
 	name : "French Fries",
 	quanity : "100"
 }, 

{
  id: "3",
  name : "Falafel",
  quantity : "100"
}, 

{
  id : "4", 
  name : "Pita Bread and Hummus",
  quantity : "100"
},
{
id: "5",
name: "Chicken Teriyaki",
quantity: "169"
}, 


{
  id : "6",
  name : "Coca-Cola",
  quantity : 169
}, 


{
  id : "7",
  name : "Sprite",
  quantity : 169
}, 

{
  id : "8",
  name : "Sunkist",
  quantity : 169
}, 

{
  id : "9",
  name : "Water",
  quantity : 169
}, 
{
  id : "10",
  name : "Ginger Ale",
  quantity : 169
},

{
  id : "11",
  name : "Mango Juice",
  quantity : 169
}


];



// This is the collections for the tables
  dbo.createCollection("tables", function(err,res){
  	if (err) throw err;
  	console.log("Tables Collection Created!");
  });

// This is the part where we are adding the table from the variable we created
 
 dbo.collection("tables").insertOne(tables,function(err, res){
    if (err) throw err;
    console.log("Tables Added!");
});


 

//  This is our menu collection

 dbo.createCollection("menu", function(err,res){
  	if (err) throw err;
  	console.log("Menu Collection Created!");
  });

 // We are inserting many items from our items variable

 dbo.collection("menu").insertMany(items, function(err,res){
 	if(err)throw err;
 	console.log("These items have been added");
 });

//------------------------
// This is our orders collection

  dbo.createCollection("orders", function(err,res){
  	if (err) throw err;
  	console.log("Orders Collection Created!");
  });

// This is our accounts collection
  dbo.createCollection("Accounts", function(err, res){
	if(err) throw err;
	console.log("Accounts Collection Created!");

  });

  dbo.createCollection("Table 1 Order", function(err,res){
    if(err)throw err;
    console.log("This is our Table 1 Order");
  });

  dbo.createCollection("Table 2 Order", function(err,res){
    if(err)throw err;
    console.log("This is our Table 2 Order");
  });

  dbo.createCollection("Table 3 Order", function(err,res){
    if(err)throw err;
    console.log("This is our Table 3 Order");
  });

  dbo.createCollection("Table 4 Order", function(err,res){
    if(err)throw err;
    console.log("This is our Table 4 Order");
  });

  dbo.createCollection("Table 5 Order", function(err,res){
    if(err)throw err;
    console.log("This is our Table 5 Order");
  });

  dbo.createCollection("Table 6 Order", function(err,res){
    if(err)throw err;
    console.log("This is our Table 6 Order");
  });







});
const express = require("express");
const app = express();

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

app.get('/',function(req,res, next) {
 res.render('routers');
});

app.post('/Get_Data', function(req, res, next){
	
	console.log(tables[1].id);
});

module.exports = app;
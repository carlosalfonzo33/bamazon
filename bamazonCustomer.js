var mysql = require("mysql");
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

 // Your username
  user: "root",

 // Your password
  password: "",
  database: "bamazon"
});

//connect to mysql and then run the main function
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    printItems(function(){
      //userSelectsItem();
    });
});

//function to print all items to the console, uses npm module cli-table
function printItems(callBack){
  //new cli-table
  var table = new Table({
    head: ['ID', 'Product', 'Department', 'Price', 'Quantity Available']
  });
  //get all rows from the Products table
  connection.query('SELECT * FROM Products', function(err, res){
    if (err) throw err;
    //add all of the rows to the cli-table
    for (var i = 0; i < res.length; i++) {
      table.push([res[i].id, res[i].product_name, res[i].department_name, '$' + res[i].price.toFixed(2), res[i].stock_quantity]);
    }
    //log the table to the console
    console.log(table.toString());
    //callback the userSelectsItems function to prompt the user to add items to cart
    callBack();
    connection.end();
    });
  }

const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config({path: './.env'});
const app = express();
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});
const publicDirectory = path.join(__dirname,'./public')
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cookieParser());



app.set('view engine','hbs');


db.connect( (error)=> {
    if(error){
        console.log(error)
    } else{
        console.log("MYSQL Connected")
    }


})
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
app.listen(3000,() =>{
    console.log("server started on port 3000");
})


    ////functionality to customers list based ordered product id and date
    db.query("SELECT * FROM users", function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
    //functionality to list ordered product based on customer's id and date
    db.query("SELECT * FROM products", function (error, results, fields) {
        if (error) throw error;
        console.log(results);
      });
      //ordered product count based on date
      db.query("SELECT * FROM products1", function (error, results, fields) {
        if (error) throw error;
        console.log(results);
      });
  

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mysql = require('mysql');
const port = 8000;
const fs = require('fs');
const { response } = require('express');
require('./startup/production')(app);

//parse application/json

app.use(bodyParser.json());

// create database connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "evolve_api",
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql Connected')
});


app.get("/", (req,res)=> {
    res.render('public/index.html');
})

// //create new record

// app.post("/api/create", (req,res) => {
//     let data = { firstName : req.body.firstname, location : req.body.location };
//     let sql = "INSERT INTO employee_table SET ?";
//     let query = conn.query(sql, data, (err, result)=>{
//         if(err) throw err;
//         res.send(JSON.stringify({status: 200, error: null, response: "New Record Created"}))
//     });
// });

// //show all records

// app.get("/api/view", (req,res)=>{
//     let sql = "select * from employee_table";
//     let query = conn.query(sql, (err, result)=>{
//         if(err) throw err;
//         res.send(JSON.stringify({status: 200, error: null, response: result}));
//     });
// });

// //get singel result:

// app.get("/api/view/:id", (req, res) => {
//     let sql = "select * from employee_table where employee_id =" + req.params.id;
//     let query = conn.query(sql, (err, result) => {
//         if(err) throw err;
//         res.send(JSON.stringify({status: 200, error: null, response: result}));
//     });
// });


// //update user:

// app.put("/api/update/", (req, res) =>{
//     let sql = "update employee_table set firstname='" + req.body.firstname + "', location='" + req.body.location + "' where employee_id =" + req.body.employee_id;
//     let query = conn.query(sql, (err, result)=>
//     {
//         if(err) throw err;
//         res.send(JSON.stringify({status: 200, error: null, response: "updated successfully"}))
//     });
// });

// //delete user
// app.delete("/api/delete/:id", (req,res)=> {
//     let sql= "delete from employee_table where employee_id =" + req.params.id+"";
//     let query = conn.query(sql, (err, result) => {
//         if(err) throw err;
//         res.send(JSON.stringify({status: 200, err: null, response: "deleted successfully"}));
//     });
// });


app.listen(port, ()=> {
    console.log(`Server is connected at port ${port}`);
})
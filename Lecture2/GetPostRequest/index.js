const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse the JSON data
app.use(express.json());

// Middleware to parse the data sent by the form
app.use(express.urlencoded({extended : true})); 

app.get("/", (req,res)=>{
    res.render("index");
})

app.get("/user", (req,res)=>{
    const {username, age} = req.query;
    res.send(username + " " + age);
})

app.post("/user", (req,res)=>{
    console.log(req.body);
    res.send("POST REQUEST")
})
app.listen(4000, ()=>{
    console.log("Server Started");
})
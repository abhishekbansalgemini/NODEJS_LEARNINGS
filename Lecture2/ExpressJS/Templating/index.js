const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")))

const todos = ['go to gym', 'learn react', 'learn js', 'learn node', 'learn aptitude'];

app.get("/", (req,res)=>{
    // res.send("Hello");

    // res.render("index");

    // res.render("random")

    // const randomnumber = Math.floor(Math.random()*100);
    // res.render('random', {randomnumber});

    res.render("index");
})


app.get("/todos", (req,res)=>{
    res.render('todos', {todos});
})

app.listen(4000, ()=>{
    console.log("Server start");
})
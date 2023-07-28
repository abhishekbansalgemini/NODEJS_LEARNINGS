const express = require("express");
const app = express();

app.get("/", (req, res)=> {
    res.send("hello"); 
})

app.get("/r/:subreddit", (req,res)=>{
    const {subreddit} = req.params; // path parameters
    res.send(subreddit);
})


app.get("/search", (req,res)=>{
    // console.log(req.query);  // search this http://localhost:4000/search?name=sabeel&age=21 on google
    // res.send("Search page"); // After ?, there are query parameters

    const {query} = req.query;
    res.send("Searching about "+query); // http://localhost:4000/search?query=red
})
app.listen(4000, ()=>{
    console.log("Server starts");
})
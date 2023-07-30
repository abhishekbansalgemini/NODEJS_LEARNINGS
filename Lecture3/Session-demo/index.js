const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }));

  // if server restarts, all sessions will destroy automatically

  app.get("/viewcount", (req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count = 1;  
    }
    res.send("you visited this page "+req.session.count+" times");
  })


app.get("/", (req,res)=>{
    res.send("hello");
})

app.listen(4000, () => {
    console.log("Server started");
  });
  
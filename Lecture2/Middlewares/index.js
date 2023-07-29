const express = require("express");
const app = express();

//Middleware

// app.use() ke andar jo bhi function likhte ho, wo har incoming request ke liye use hotaa hai. toh sabse pehle koi bhi
// request aayegi to app.use() ke andar jo function h vo chlegaa

app.use((req, res, next) => {
  // res.send("Inside App.use");
  console.log("My first Middleware");
  req.name = "Abhi";
  // Middleware has access to the request, response object so it can change the response or request
  // ...suppose you have written your whole code which you want to execute
  // Now next() function will execute which means it will call next middleware to execute (below mentioned get request is also kind of a middleware)
  next();
  // sp after calling next() function, next middleware start its execution and Hello will be seen on the screen
  // if we do not execute this next() function (i.e. not passing control to execute next middleware or request) the browser will get continous loading and we will not get any response
});

const verify = (req, res, next) => {
  const { password } = req.query;
  // let suppose password = orange
  if (password !== "orange") {
    return res.send("Invalid password");
  }
  next();
};

// app.use((req,res,next)=>{
//     res.send("Hijacked");
// })

app.get("/", (req, res) => {
  const { name } = req;
  res.send("Hello " + name);
});

// I want to restrict below route because i don't want to everyone to see my secret
app.get("/secret", verify, (req, res) => {
  // here you can pass n number of functions as a middleware, i have passed only one (i.e. verify)
  res.send("Secret route");
});

app.listen(4000, () => {
  console.log("Server started");
});

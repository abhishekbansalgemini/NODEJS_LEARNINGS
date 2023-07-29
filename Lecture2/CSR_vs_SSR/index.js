const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.set(express.static(path.join(__dirname,"public"))); // if you want to use the static files

// app.use("/cat", express.static(path.join(__dirname,"public"))); //in this, static files only accessible at /cat path
// as soon as we go at localhost:5000/cat, it will access index.html file created in public folder

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todos = ["Go to gym", "Learn Node JS", "Learn React", "Learn DSA"];

app.get("/todos", (req, res) => {
  if (req.xhr) { // if it is an ajax request (request send from the js file in public folder) XHR-> XML HTTP REQUEST
    res.json(todos); 
  } else{
     res.render("todos", {todos}); // If it is request sent from the browser
  }
});

app.post("/todos", (req, res) => {
  const { todo } = req.body;
  todos.push(todo);
  res.redirect("/todos");
});

app.listen(5000, () => {
  console.log("Server starts");
});

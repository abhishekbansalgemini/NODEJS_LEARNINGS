const express = require("express");
const app = express();
const path = require("path");
const {v4 : uuid} = require("uuid");
const methodOverride = require("method-override"); // to override the methods. In this file we use it to convert the POST request into PATCH request

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

let comments = [
  {
    id: uuid(),
    username: "abhi",
    text: "Nice person",
  },
  {
    id: uuid(),
    username: "ananya",
    text: "Awesome person",
  },
  {
    id: uuid(),
    username: "ayush",
    text: "Happy person",
  },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

// show all comments 
app.get("/comments", (req,res)=>{
    res.render("index", {comments});    
})

// To create new comment, first you have to show the form

app.get("/comments/new", (req,res)=>{
    res.render("new")
})

// New Comment
app.post("/comments", (req,res)=>{
    const {username, comment} = req.body;
    comments.push({
        id : uuid(),
        username: username,
        text: comment
    });
    res.redirect("/comments");
})

// Show Comment

app.get("/comments/:commentid", (req,res)=>{
    const {commentid} = req.params;
    const foundComment = comments.find((comment)=> comment.id === commentid);
    res.render("show", {foundComment});
})

//Edit form to edit the comment

app.get("/comments/:commentid/edit", (req,res)=>{
    const {commentid} = req.params; 
    const foundComment = comments.find((comment)=> comment.id === commentid);
    res.render("edit", {comment : foundComment})
})

// Update comment

app.patch ("/comments/:commentid", (req,res)=>{
    const {commentid} = req.params;
    const {username, comment} = req.body;
    const foundComment = comments.find((comment)=> comment.id === commentid);
    foundComment.username = username;
    foundComment.text = comment;
    res.redirect("/comments");
})

// delete comment

app.delete("/comments/:commentid", (req,res)=>{
    const {commentid} = req.params;
    const updatedCommentsArray = comments.filter((comment)=> comment.id !== commentid);
    comments = updatedCommentsArray;
    res.redirect("/comments");
})

app.listen(7000, () => {
  console.log("Server Start");
});

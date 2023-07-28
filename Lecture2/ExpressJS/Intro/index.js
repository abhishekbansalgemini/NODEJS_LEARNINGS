// Express js is a framework used to create servers and handles request in very good way

const express = require("express"); // this express is actually a function
const app = express();

// app.get("/", (req, res)=>{
//     res.send("Hello");
// })

app.use((req, res) => {
  res.send("Request sent");
});

app.listen(5000, () => {
  console.log("Server running");
});
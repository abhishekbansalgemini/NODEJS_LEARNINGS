const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app); // using express for request handling
const socketio = require("socket.io");
const io = socketio(server); // now it is socket server

// when we create this socket server, it do two things --->
// 1. if we run localhost:4000 it will render that index.html file
// 2. if we run http://localhost:4000/socket.io/socket.io.js, means it is giving us one more thing i.e. socket.io.js so let us include this in index.html
// This is something we have for client side. So now both the client and the server is ready for real time communication

app.use("/", express.static(path.join(__dirname, "public")));

const users = {};



io.on("connection", (socket)=>{ // connection event is predefined event
   console.log("Someone got connected with id "+socket.id);


   // sending msg back to same user (same socket)
   // socket.on("send-msg", (data)=>{
   //     socket.emit("recieved-msg", {
   //         msg : data.msg,
   //         id: socket.id
   //     })
   // })

   // sending msg to all connected user (just like group chatting)
   socket.on("send-msg", (data)=>{
       io.emit("recieved-msg", {
           msg : data.msg,
           name: users[socket.id]
       })
   });

   socket.on("login", (data)=>{
       users[socket.id] = data.name;
   })


   socket.on('disconnect', () => { // this disconnect event is also a  predefined event (when user close the tab or refresh the tab, it will show user disconnected)
    console.log('user disconnected');
  });
})

io.on("connection", ()=>{
    console.log("Someone got connected");
})




server.listen(4000, ()=>{
    console.log("Server started");
})


const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors=require("cors");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer,{
    cors: {
      origin: ["http://localhost:3000"],
   
    }
  });

  let socketIds=[];

  app.use(cors());

app.get("/userlist",(req,res)=>{
    res.json({
        message:"Success",
        userList:socketIds
    })
})


io.on("connection", (socket) => {


    console.log("Client connected",socket.handshake.query.username);
     
    socketIds=socketIds.filter(ele=>ele.title!=socket.handshake.query.username);

    socketIds.push({
        title:socket.handshake.query.username,
        id:socket.id
    });

    socket.on("message",(data)=>{
        console.log(data);
      

        socket.to(data.id).emit("groupchat",data.message);// you can use one to one chat 

    })
 
});

httpServer.listen(8000);
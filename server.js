
const app = require("./src/app");
const http = require("http");
const { execPath } = require("process");
const socketio = require("socket.io");


const server = http.createServer(app);
const io =  socketio(server);

io.on("connection",(socket)=>{
    socket.on("send-location",(data)=>{
        io.emit("receive-location",{id: socket.id, ...data})
    })

    socket.on("disconnect",()=>{
        io.emit("user-disconnect", socket.id);
    }) 
    
    console.log("user connected:", socket.id);

    socket.on("message",(data)=>{
        console.log("Received: ",data);
        io.emit("message",data);
    })

    socket.on("disconnect",()=>{
        console.log("user disconnected: ", socket.id);
    })
})





server.listen(3000,()=>{
    console.log("server is running on port 3000");
})
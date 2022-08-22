const express = require("express")
const app = express()
const {Server} = require("socket.io")

const http = require("http").createServer(app)

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

const wss = new Server(http)

wss.on("connection",(ws)=>{
    console.log("user joined")
    ws.on("change score",(random)=>{
        wss.emit("change score", random)
    })
})

http.listen(8000, ()=>{
    console.log("server started at port 8000")
})














































// const express = require("express")
// const app = express()
// const http = require("http").createServer(app)
// const {Server} = require("socket.io")

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })

// http.listen(8080,()=>{
//     console.log("server started on http://localhost:8080");
// })

// // const io = require("socket.io")(http)

// // io.on("connection",(socket)=>{
// //     console.log("A new user joined...");
// //     socket.on("score changed", (random) => {
// //        socket.emit("score changed", random)
// //     })
// // })

// const wss = new Server(http)

// wss.on("connection",(socket)=>{
//     console.log("a new year connected");

//     socket.on("score changed", (random) => {
//         wss.emit("score changed", random)
//     })
// })
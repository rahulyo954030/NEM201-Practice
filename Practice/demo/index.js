const  express =  require("express")
const {Server} = require("socket.io")
const app = express()

const http = require("http").createServer(app)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

const wss = new Server(http)

wss.on("connection",(ws)=>{
 console.log("user joined")

    ws.on("Score change",(random)=>{
        wss.emit("Score change", random)
    })

})

http.listen(8000, ()=>{
    console.log("server started at http://localhost:8000");
})
const {WebSocketServer} = require("ws")
const wss =  new WebSocketServer({port: 8080})

wss.on("connection", (ws)=>{
    console.log("Got new connection");
    ws.send("Welcome user")

    ws.on("message", (data)=>{
        console.log("Socket sent message:", data.toString("utf-8"));
        ws.send("Hello user")
    })
})
// paste that code to google console
// const ws = new WebSocket("ws://localhost:8080") 
// ws.onmessage=(msg)=>console.log("server said:", msg.data)
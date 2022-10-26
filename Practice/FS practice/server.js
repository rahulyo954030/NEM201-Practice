
const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("home page")
})

app.listen(8080, ()=>{
console.log("server started at http://localhost:8080")
})

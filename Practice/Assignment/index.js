const express = require("express")

const app = express()

app.get("/", (req,res)=>{
    res.send(`
    <h2>
    Home Page
    </h2>
    `)
})

app.listen(8080, ()=>{
    console.log("http://localhost:8080")
})
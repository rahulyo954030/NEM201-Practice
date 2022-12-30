const express = require("express")
const connection = require("./database/db")
const studentRouter =  require("./routes/student")

const app =  express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/student", studentRouter)

app.get("/",(req,res)=>{
    res.send("Welcome to the home page")
})

app.listen(8080,async()=>{
    await connection
    console.log("server started at http://localhost:8080");
})
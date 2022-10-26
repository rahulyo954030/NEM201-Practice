const express = require("express")
const connection = require("./Storage/db")

const userRouter = require("./Routes/user")
const app = express()
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use("/user", userRouter)

app.get("/",(req,res)=>{
    res.send("Home")
})

app.listen(8080, async()=>{
    await connection
    console.log("server started at http://localhost:8080");
})



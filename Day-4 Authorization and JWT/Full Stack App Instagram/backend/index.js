// const mongoose = require("mongoose")
const express = require("express")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const connection = require("./storage/db")
const cors = require("cors")


const app  = express()


app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"]
}))

app.use("/static", express.static("./uploads"))

app.use("/auth", authRouter)
app.use("/profile", userRouter)

app.listen(8080, async()=>{
    await connection;
    console.log("connected to db");
    console.log("server started on http://localhost:8080");
})


/* 
second way
mongoose.connect("mongodb://localhost:27017/instagram").then(()=>{
    app.listen(8080, async()=>{
    await connection;
    console.log("connected to db");
    console.log("server started on http://localhost:8080");
})
})
*/

/*
{
    "name": "Rahul",
    "username": "rahul1234",
    "email": "rahul@gmail.com",
    "password": "rahul",
    "mobile" : 8888888888,
    "country" : "India",
    "gender" : "Male"
} 
*/
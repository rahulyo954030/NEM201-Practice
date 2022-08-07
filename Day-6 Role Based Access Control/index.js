const express = require("express")
const UserModel = require("./userSchema")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("hello")
})

app.post("/signup", async(req,res)=>{
    const {username , password , role} = req.body;
    const user = new UserModel({
        username,
        age:12,
        hash:password,
        role
    })
    await user.save()
    const token = jwt.sign({
        id: user._id,
        username:user.username,
        role: user.role
    }, "SECRET")
    return res.send({token})
})

app.delete("/lecture/:lectureid", (req,res)=>{
    const token = req.headers["authorization"].split(" ")[1];
    const {role} = jwt.verify(token, "SECRET");
    if(role !=="admin"){
        return res.status(403).send("You don't have access")
    }
    else{
        return res.status(200).send("Lecture deleted successfully")
    }
})
mongoose.connect("mongodb://localhost:27017/roleBaseAccess").then(()=>{
    app.listen(8080, ()=>{
        console.log("server started on http://localhost:8080")
    })
})


/*
{
    "username": "rahul1234",
    "password": "rahul",
    "role" : "student"
} 
*/
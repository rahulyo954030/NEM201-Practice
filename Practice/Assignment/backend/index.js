
const express = require("express")
const connection = require("./db/db")
const authRouter = require("./Routes/auth")

const app = express()
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get("/", (req,res)=>{
    res.send(`
    <h2>
    Home Page
    </h2>
    `)
})

app.listen(8080, async()=>{
    await connection;
    console.log("connected to db");
    console.log("server started on http://localhost:8080");
})

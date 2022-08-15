import express from "express";
import mongoose from "mongoose";
import { UserRouter } from "./routes/user.route";
import config from "config";
const app = express()

console.log("Mongo url", config.get("db.url"));

// const conn = mongoose.connect(config.get("db.url"));
app.use("/users", UserRouter)

app.listen(8080, ()=>{
    console.log("server started on http://localhost:8080");
})
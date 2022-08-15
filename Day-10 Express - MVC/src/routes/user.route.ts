import { Router } from "express";
import { getUserById } from "../controllers/user.controller";

export const UserRouter = Router()

UserRouter.post("/", (req,res)=>{
    res.send("User created successfully")
})

UserRouter.get("/:id", (req,res)=>{
    const {id} = req.params;
    const user = getUserById(id)
    return res.send(user)
})

UserRouter.delete("/:id", (req,res)=>{
    res.send("deleted User details")
})

UserRouter.put("/:id", (req,res)=>{
    res.send("updated User information with id")
})
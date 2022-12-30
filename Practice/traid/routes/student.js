const STUDENT =  require("../models/student")

const {Router} = require("express")

const studentRouter =  Router()

studentRouter.post("/",(req,res)=>{
    const student = new STUDENT(req.body)
    student.save((err,success)=>{
        try{
            res.status(200).send({message:"student data successfully added"})
        }
        catch(err){
            res.status(404).send({message:"Something went wrong"})
        }
    })
})

studentRouter.get("/",async(req,res)=>{
    const student = await STUDENT.find()
    res.status(200).send(student)
})

studentRouter.delete("/:id",async(req,res)=>{
    const id = req.params.id
    const student = await STUDENT.deleteOne({_id:id})
    res.status(200).send("successfully deleted")
})

studentRouter.patch("/:id",async(req,res)=>{
    const id = req.params.id
    const student = await STUDENT.updateOne({_id:id},req.body)
    res.status(200).send("successfully updated")
})

module.exports = studentRouter
const {Router} = require("express")

const userRouter = Router()

userRouter.get("/", (req,res)=>{
    res.send("welcome to get page")
})

module.exports = userRouter
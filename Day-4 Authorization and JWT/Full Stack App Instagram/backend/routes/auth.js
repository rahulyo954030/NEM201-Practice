const {Router} = require("express")
const User = require("../models/user")
const jwt = require("jsonwebtoken")

const authRouter = Router()

authRouter.post("/signup", (req,res)=>{
    const user = new User(req.body)
    user.save((err,success)=>{
        if(err){
            return res.status(500).send({message: "Error Occurred"})
        }
        // return res.status(201).send({message: "Signup successfully", token : 12345, user : success["_doc"]})
        return res.status(201).send({message: "Signup successfully", user : success["_doc"]})
    })
})

authRouter.post("/login", async(req,res)=>{
    const {username, password} = req.body;
    const validUser = await User.find({username, password});
    if(validUser.length <1 || !validUser ){
        return res.status(401).send({message: "Invalid Credentials"})
    }
    const token = jwt.sign({
        username
    }, 
    "SECRET",{
        expiresIn: "30 days"
    }
    )
    return res.send({message: "login successfully", token : token})
})

authRouter.get("/profile/:id", async(req,res)=>{
const {id} = req.params;
const token = req.headers["authorization"].split(" ")[1];
try{
    const verification = jwt.verify(token, "SECRET")
    if(verification){
        const user = await User.findOne({_id: id});
        res.send({profile:"userprofile"})
    }
    else{
        return res.status(401).send("Unauthorized")
    }
}
catch{
    return res.status(401).send("Unauthorized")
}
})

module.exports = authRouter
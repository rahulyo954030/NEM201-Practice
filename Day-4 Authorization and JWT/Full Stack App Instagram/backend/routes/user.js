const User = require("../models/user")
const Feed = require("../models/Feed")

const {Router} = require("express")
const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file,cb){
        cb(null,"./uploads")
    },
    filename: function (req, file,cb){
        console.log("Filename", req.body);
        cb(null, file.originalname)
    }
})

const uploads = multer({storage : storage })
const userRouter = Router()

userRouter.get("/:userId", async (req,res)=>{
    const {userId} = req.params;
    const user = await User.findById(userId)
    if(user){
        res.send(user)
    }
    else{
        res.status(404).send({message: "User not found"})
    }
})

userRouter.get("/:userid/feed", async (req,res)=>{
    const {userid} = req.params;
    const feeds = await Feed.find({userid})
    console.log(feeds);
    return res.send(feeds)
})

userRouter.post("/:userid/feed", uploads.single("image"), async(req,res)=>{
    console.log(req.file);
    const {userid} =req.params
    const {title, description, tags} = req.body
    const image = req.file.originalname
   
    const feed = new Feed({
        title, 
        description, 
        tags: tags.split(", "),
        image,
        userid,
    })
    await feed.save()

    return res.send("success");
})



module.exports = userRouter;
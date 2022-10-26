const {Router} = require("express")
const BlogSchema = require("../Models/blogSchema")

const userRouter = Router()

userRouter.get("/", async(req,res)=>{
  const blag = await BlogSchema.find()
  res.send(blag)
})

userRouter.post("/", async(req,res)=>{
    const user = new BlogSchema(req.body);
    user.save((err, success) => {
      if (err) {
        return res.status(500).send({ message: "Error Occurred" });
      }
      return res
        .status(201).send({ message: "Successfully Posted", user: success["_doc"] });
    }
    );
})

module.exports = userRouter
const {model, Schema} = require("mongoose")

const blog = new Schema({
    title: String,
    body:String,
    catogery:String
})

const BlogSchema = model("BlogSchema",blog)

module.exports = BlogSchema
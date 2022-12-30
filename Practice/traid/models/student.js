const {model, Schema} = require("mongoose")

const Student = new Schema({
    name : {
        type:String,
        required: true
    },
    class : {
        type:String,
        required: true
    },
    rollNumber : {
        type:Number,
        required: true
    },
    address : {
        type:String,
        required: true
    }

})

const STUDENT =  model("Student", Student)

module.exports =  STUDENT
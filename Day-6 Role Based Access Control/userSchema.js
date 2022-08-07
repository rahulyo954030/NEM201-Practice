const {Schema, model} =  require("mongoose")

const UserSchema = new Schema({
    username : String,
    hash : String,
    age : Number,
    role: {
        type : String,
        enum :["student", "instructor" , "admin"]
    }
})

const UserModel = model("user", UserSchema);
module.exports = UserModel;
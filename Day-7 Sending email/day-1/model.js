const { Schema, model } = require("mongoose");

const OTPschema = new Schema({
    userid: String,
    otp : String,
    // totlaattempts: 3
    //reqtuest call: false
})

const OTP = model("otp", OTPschema);
module.exports = OTP
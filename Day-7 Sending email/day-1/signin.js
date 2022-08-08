
const express = require("express");
const mongoose = require("mongoose");
const OTP = require("./model");

const conn = mongoose.createConnection("mongodb://localhost:27017/users")
// const { customAlphabet } = require("nanoid");

// const nanoid = customAlphabet("0123456789", 6);
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/signup", (req, res) =>{
    const { username, password, name, age, email } = req.body;
    //first store the above user in db, get User id
    const otp = Math.floor(100000 + Math.random() * 900000);
    // res.send("OTP is" + otp);
    const user = "123456";
    OTP.insertMany([{userid: user_id, otp}]);
    // user otp
    //send email

    const content = `<div>
<h1>Hello,{{name}}</h1>
<p>Thanku for signing in.</p>
<p>Your OTP is: {{otp}}</p>
</div>`;

const template = hbs.compile(content);

transport.sendMail({
    from: "admin@yoursite.com",
    to: user.email,
    subject: "Hello from nodemailer",
    text: "Account created successfull", 
    html: template({name: "Nitesh", otp: otp})
})

    app.post("/validateotp", (req, res)=>{
        const { otp } = req.body;
        //send valid
    })


});


app.listen(8080, ()=>{
    console.log("Server started on port 8080");
})

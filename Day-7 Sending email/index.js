const nodemailer = require("nodemailer")
const hbs = require("handlebars")
const fs = require("fs")


const EMAIL = "	chelsey.fahey@ethereal.email"
const PASSWORD = "BFzkSxAC5DuSmRdz7f"



const transport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth:{
        user:EMAIL,
        pass: PASSWORD
    }
})

const template = hbs.compile(fs.readFileSync("./login.hbs", "utf-8"))

transport.sendMail({
    from :"Rahul <rahulyo954030@gmail.com>",
    to : "nitesh401@gmail.com",
    // subject: "Your C1 Score",
    // text : "Your C1 Score is 10/10"
    subject: "Login Successful",
    html : template({username : "Rahul Singh", age : 23, eligibility : "Eligible"})
})
.then((info)=>{
console.log("Mail send successfully", info);
})
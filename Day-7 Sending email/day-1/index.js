const nodemailer = require("nodemailer");
const hbs = require("handlebars");

const content = `<div>
<h1>Hello,{{name}}</h1>
<p>Thanku for signing</p>
<p>Your age is: {{age}}</p>
</div>`;

const template = hbs.compile(content)

const transport =  nodemailer.createTransport({
    host: "smtp.ethereal.email",
    secure: false,
    port: 587,
    auth:{
        user: "arnold.oconner51@ethereal.email",
        pass: "ExGXxx6S9gUa4UN8xE"
        
    }
});

transport.sendMail({
    from: "from@example.com",
    to: "to@example.com",
    subject: "Hello from nodemailer",
    text: "hello from my side", 
    html: template({name: "Nitesh", age: 20})
})
.then(console.log);
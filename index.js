// let btn = document.getElementById('btn');
var nodemailer = require('nodemailer');
const express = require("express");
const bP = require("body-parser");
const encoder = bP.urlencoded({ extended: true });  

const app = express();

app.use(express.static(__dirname + '/loginpage.css'));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/loginpage.html");
  // res.write('Login Successful');
//   res.redirect('/index.html')
  // res.end();
})

app.post("/",encoder,function(req,res)
{
  let email = req.body.email;
  let message = Math.floor(Math.random() * (999999 - 100000) ) + 100000;
  // console.log(email.value);
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'shyam.pankhaniya5@gmail.com',
        pass: 'ubvphiizcurlfxvg'
    }
    
  });
  
  var mailOptions = {
    from: 'shyam.pankhaniya5@gmail.com',
    // to: 'suman.h.pankhaniya555@gmail.com',
    to: `${email}`,
    subject: 'Sending Email using Node.js',
    text: `${message}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  // res.sendFile(__dirname + '/index.html');
})

app.listen(4000);

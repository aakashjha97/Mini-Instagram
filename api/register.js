const route=require('express').Router()
var bCrypt = require('bcrypt-nodejs');
const Users=require('../db').Users

route.get('/',(req,res)=>{
res.redirect('../register.html')
})

var generateHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

route.post('/',(req,res)=>{
var userPassword = generateHash(req.body.password);
Users.create({
username:req.body.username,
phone_number:req.body.phone,
email:req.body.email,
password:userPassword
}).then((createdUser)=>{
	res.render('login.ejs',{message:''})
}).catch((err)=>{
	res.send("error")
})
//if email already exist in db there will be error
})

exports=module.exports=route
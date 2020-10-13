const route=require('express').Router()
const Users=require('../db').Users

route.get('/',(req,res)=>{
res.redirect('../register.html')
})

route.post('/',(req,res)=>{
Users.create({
username:req.body.username,
phone_number:req.body.phone,
email:req.body.email,
password:req.body.password
}).then((createdUser)=>{
	res.redirect('../login.html')
})//if email already exist in db there will be error
})

exports=module.exports=route
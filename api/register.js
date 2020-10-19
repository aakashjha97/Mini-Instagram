const route=require('express').Router()
var bCrypt = require('bcrypt-nodejs');
const Users=require('../db').Users

route.get('/',(req,res)=>{
res.render('register',{message:''})
})

var generateHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

route.post('/',(req,res)=>{

if(req.body.password!=req.body.cpassword)
{
	return res.render('register.ejs',{message:'passwords do not match'})
}

Users.findOne({where:{
	username:req.body.username
}}).then((user)=>{
	if(user)
		return res.render('register.ejs',{message:'Userid already exist'})

	Users.findOne({where:{
	email:req.body.email
	}}).then((user)=>{
		if(user)
		return res.render('register.ejs',{message:'Email already registered'})

		Users.findOne({where:{
		phone_number:req.body.phone
		}}).then((user)=>{
			if(user)
			return res.render('register.ejs',{message:'phone number already registered'})
		})
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
	})

	})
	
})

exports=module.exports=route
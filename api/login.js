const route=require('express').Router()
var bCrypt = require('bcrypt-nodejs');
const Users=require('../db').Users

route.get('/',(req,res)=>{
res.render('login',{message:''})
})

route.post('/',(req,res)=>{

	var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
    }
	Users.findOne({where:{
		username:req.body.username
	}}).then((user)=>{

		if(!user)
		{
			return res.render('login.ejs',{message:'no such user'})
		}
		// if(!isValidPassword(user.password,req.body.password))
		// {
		// 	return res.render('login.ejs',{message:'wrong password'})
		// }
		res.render('loggedin.ejs',{userid:user.id,name:req.body.username,message:''})
	}).catch((err)=>{
		res.send("error")
	})
})

exports=module.exports=route
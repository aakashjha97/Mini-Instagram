const route=require('express').Router();
const Posts=require('../db').Posts

route.get('/',(req,res)=>{
	Posts.findAll().then(posts=>{
		res.render('viewpost.ejs',{posts})
	})
})

exports=module.exports=route

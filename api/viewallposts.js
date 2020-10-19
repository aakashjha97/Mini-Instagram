const route=require('express').Router();
const Posts=require('../db').Posts

route.post('/idwise',(req,res)=>{
	Posts.findAll().then(posts=>{
		res.render('viewallpost.ejs',{posts:posts,uid:req.body.userid})
	})
})

exports=module.exports=route

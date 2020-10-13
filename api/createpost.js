const route=require('express').Router();
const Posts=require('../db').Posts

route.get('/',(req,res)=>{
	res.redirect('/createpost.html')
})

route.post('/',(req,res)=>{
	
	Posts.create({
		name:req.body.name,
		auther:req.body.auther,
		genre:req.body.genre
		}).then((posts)=>{
			res.status(201).send("Post added successfully");
		}).catch((err)=>{
			res.status(501).send({
				error:err
			})
		})
})

exports=module.exports=route

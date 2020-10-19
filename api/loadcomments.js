const route=require('express').Router();
const Comments=require('../db').Comments
const Posts=require('../db').Posts

route.post('/',(req,res)=>{

	Comments.findAll({where:{
		postid:req.body.postid
	}}).then(comments=>{
		console.log("yes")
		Posts.findOne({
			where:{
				id:req.body.postid
			}
		}).then((post)=>{
			res.render('comments.ejs',{userid:req.body.userid,pid:req.body.postid,comments:comments,name:post.name,img:post.image,message:''})
		}).catch((err)=>{
			res.send("error1")
		})	
	})
})

exports=module.exports=route
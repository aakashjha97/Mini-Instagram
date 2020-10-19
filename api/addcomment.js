const route=require('express').Router()
const Comments=require('../db').Comments
const Users=require('../db').Users

route.post('/',(req,res)=>{
console.log(req.body.userid)
Users.findOne({where:{
	id:req.body.userid
}}).then((user)=>{
	Comments.create({
	username:user.username,
	userid:req.body.userid,
	postid:req.body.postid,
	comment:req.body.comment,
	}).then((createdcomments)=>{
		res.send('comment added successfully')
	}).catch((err)=>{
		res.send("error1")
	})
	}).catch((err)=>{
		res.send("error2")
	})

})


exports=module.exports=route
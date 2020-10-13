const route=require('express').Router();
const Posts=require('../db').Posts

route.post('/',(req,res)=>{
	Posts.destroy({
		where:{
			id:req.body.id
		}
	}).then(()=>{
		res.send("Post Deleted successfully.........")
	})
})


exports=module.exports=route
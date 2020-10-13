const route=require('express').Router();
const Posts=require('../db').Posts

route.post('/idvalue',(req,res)=>{
	let id=req.body.id;
	res.render('updatepost',{id});
})

route.post('/',(req,res)=>{
	
	Posts.findOne({ where: { id: req.body.id } })
  .then((post)=>{
 
    if (post) {
      post.update({
        name:req.body.name,
        auther:req.body.auther,
        genre:req.body.genre
      })
      .then(()=>{
      	res.send("Post updated successfully")
      })
    }
  })

})


exports=module.exports=route
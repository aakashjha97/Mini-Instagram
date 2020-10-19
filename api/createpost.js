const route=require('express').Router();
const Posts=require('../db').Posts
const Users=require('../db').Users
const multer = require('multer')
const fs=require('fs')

route.post('/idwise',(req,res)=>{
	res.render('createpost.ejs',{message:'',userid:req.body.userid})
})

let storage = multer.diskStorage({

    destination: function (req, file, callback) {
    		var dir = "./public/uploads";
      if(!fs.existsSync(dir))
      {
      	fs.mkdirSync(dir);
      }
      callback(null, dir);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
 

var upload = multer({storage: storage}).single('files');

route.post('/',(req,res,next)=>{
	upload(req,res,function(err){
		if(err){
				return res.send("something wrong")
		}
			var uid=req.body.userid;
			Users.findOne({where:{
				id:uid
			}}).then((user)=>{
				var un=user.username;
				var n=req.body.name;
				var	a=req.body.auther;
				var	g=req.body.genre;
				var i=req.file.filename
			
				if(req.file.mimetype == "image/jpeg" ||req.file.mimetype == "image/png"||req.file.mimetype == "image/gif" ){
				        Posts.create({
				        	userid:uid,
				        	username:un,
							name:n,
							auther:a,
							genre:g,
							image:i
						}).then((posts)=>{
							res.status(201).send("Post added successfully");
						}).catch((err)=>{
							res.status(501).send({
							error:err
						})
					})
			}
			else
			{
			    message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
			    res.render('index.ejs',{message: message});
			}
		}).catch((err)=>{
				res.status(501).send({
							error:err
						})
			})
	})
})

exports=module.exports=route
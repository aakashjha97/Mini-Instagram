const route=require('express').Router();
const Posts=require('../db').Posts
const multer = require('multer')
const fs=require('fs')

route.get('/',(req,res)=>{
	res.render('createpost.ejs',{message:''})
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
	
			var n=req.body.name;
			var	a=req.body.auther;
			var	g=req.body.genre;
			var i=req.file.filename

				if(req.file.mimetype == "image/jpeg" ||req.file.mimetype == "image/png"||req.file.mimetype == "image/gif" ){
				        Posts.create({
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
	})
})

exports=module.exports=route
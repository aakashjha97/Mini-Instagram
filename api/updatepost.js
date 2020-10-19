const route=require('express').Router();
const Posts=require('../db').Posts
const multer=require('multer')

route.post('/idvalue',(req,res)=>{
	
  Posts.findOne({ where: { id: req.body.id } })
  .then((post)=>{
    res.render('updatepost',{post});
  }).catch((err)=>{
    res.send("error")
  })
	
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

route.post('/',(req,res)=>{

  upload(req,res,function(err){
    if(err){
        return res.send("something wrong")
    }
      var pid=req.body.postid;
      Posts.findOne({where:{
        id:pid
      }}).then((post)=>{
        var uid=post.userid
        var un=post.username;
        var n=req.body.name;
        var a=req.body.auther;
        var g=req.body.genre;
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
              res.status(201).send("Post updated successfully");
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
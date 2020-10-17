const express=require('express')
const session=require('express-session')
const passport=require('./passport')
const path=require('path')
const http = require('http')
const multer = require('multer')
const bodyParser=require("body-parser");
const fs=require('fs')

const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
	secret:'somesecretstring'
}))

app.use(passport.initialize())
app.use(passport.session())

let storage = multer.diskStorage({

    destination: function (req, file, callback) {
    		var dir = "./uploads";
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

// app.post('/uploads',(req,res,next)=>{
// 	upload(req,res,function(err){
// 		if(err){
// 				return res.send("something wrong")
// 		}
// 		else{
// 			console.log(req)
// 			res.send("done")
// 		}
// 	})
// })

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./api').route)

app.listen(process.env.PORT || 1234)
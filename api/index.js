const route=require('express').Router();

route.use('/login',require('./login'))
route.use('/logout',require('./logout'))
route.use('/register',require('./register'))
route.use('/createpost',require('./createpost'))
route.use('/viewpost',require('./viewpost'))
route.use('/updatepost',require('./updatepost'))
route.use('/deletepost',require('./deletepost'))
route.use('/loadcomments',require('./loadcomments'))
route.use('/addcomment',require('./addcomment'))
route.use('/viewallposts',require('./viewallposts'))

exports=module.exports={
	route
}
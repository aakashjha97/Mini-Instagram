const route=require('express').Router();

route.use('/login',require('./login'))
route.use('/logout',require('./logout'))
route.use('/register',require('./register'))
route.use('/loggedin',require('./loggedin'))
route.use('/createpost',require('./createpost'))
route.use('/viewpost',require('./viewpost'))
route.use('/updatepost',require('./updatepost'))
route.use('/deletepost',require('./deletepost'))

exports=module.exports={
	route
}
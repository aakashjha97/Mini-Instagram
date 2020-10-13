const route=require('express').Router()
const passport=require('../passport')

route.get('/',(req,res)=>{
res.redirect('../login.html')
})

route.post('/',passport.authenticate('local',{
	failureRedirect: '../login.html',
	successRedirect: './loggedin'
}))

exports=module.exports=route
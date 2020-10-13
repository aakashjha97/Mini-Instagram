const route=require('express').Router()

route.get('/',(req,res)=>{
req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
})

exports=module.exports=route
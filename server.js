const express=require('express')
const session=require('express-session')
const passport=require('./passport')
const path=require('path')

const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
	secret:'somesecretstring'
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./api').route)

app.listen(process.env.PORT || 1234)

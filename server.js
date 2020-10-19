const express=require('express')
const session=require('express-session')
const passport=require('./passport')
const path=require('path')
const bodyParser=require("body-parser");

const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',express.static(path.join(__dirname,'public')))
//session
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api',require('./api').route)

app.listen(process.env.PORT || 1234)
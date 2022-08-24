const path=require('path')
const express = require("express")
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB =require('./config/db')
const passport = require("passport")
const session= require('express-session')

//load config
dotenv.config({path: './config/config.env'})

require('./config/passport')(passport)

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', '.hbs')

app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized:false
}))

//passport middlewares
app.use(passport.initialize())
app.use(passport.session())

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//route
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 2121

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}` ))
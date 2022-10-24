const express= require('express')
const app = express() 
const cors = require('cors')

require('dotenv').config() 
const { MongoClient } = require("mongodb");
const methodOverride = require('method-override')

//middleware set views engine
app.set("views", __dirname + "/views");
app.set('view engine','jsx') 
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
app.use('/topics', require('./controllers/topic_controllers'))
app.use(methodOverride('_method'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false })); 

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('*',(req,res)=>{
    res.render('error404')
})

app.listen(process.env.PORT)


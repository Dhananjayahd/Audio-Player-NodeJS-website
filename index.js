const express=require('express')
const app = express()
const path= require('path')
const bodyparser = require('body-parser')

const port = process.env.PORT||3000

app.use(express.static(__dirname+'/public'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

app.get('/nikhil',(req,res)=>{
    res.render('index')
})


app.listen(port,()=>console.log('app is running at port 3000'))
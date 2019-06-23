const express=require('express')
const app = express()
const path= require('path')

const port = process.env.PORT||3000

app.use(express.static(__dirname+'/public'))
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

app.get('/nikhil',(req,res)=>{
    res.render('nikhil')
})
app.get('/divya',(req,res)=>{
    res.render('divya')
})
app.get('/tejas',(req,res)=>{
    res.render('tejas')
})
app.get('/priyanka',(req,res)=>{
    res.render('priyanka')
})
app.get('/harshitha',(req,res)=>{
    res.render('harshitha')
})
app.get('/manu',(req,res)=>{
    res.render('manu')
})

app.listen(port,()=>console.log('app is running at port 3000'))
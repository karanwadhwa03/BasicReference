const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app =express();
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));

const Create=require('./routes/create')
const Blog=require('./routes/blog')
app.get('/',(req,res)=>{
    res.render('home',{path:'/'})
})
app.use('/blog',Blog)
app.use('/create',Create)

app.use('/',(req,res)=>res.send('FUCK OFF'))

app.listen(3000,()=>{
    console.log("Server 3000")
})
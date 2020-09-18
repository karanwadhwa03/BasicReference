const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const { request } = require('http');
const Date=require(path.join(__dirname,'views','date.js'));
const app =express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

var items=[];
var getdate=Date.printdate();
app.get('/',(req,res,next)=>{
    res.render('first',{items:items,date:getdate});
    //console.log(items)
})

app.post('/',(req,res)=>{
    console.log(req.body.todo);
    items.push(req.body.todo);
    res.redirect('/')

})
app.use((req,res)=>res.status(404).send("No Found"))


app.listen(3000,()=>{
    console.log("Server At 3000")
})

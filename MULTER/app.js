const express=require('express');
const multer=require('multer')
const ejs=require('ejs')
const path=require('path');
const bodyParser=require('body-parser');


const app=express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true})); 

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

var upload = multer({ storage: storage })


app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/', upload.single('avatar'), (req, res) => {
    
      res.send(req.file);
   
  })

app.listen(3000,()=>{
    console.log('SERVER ')
})
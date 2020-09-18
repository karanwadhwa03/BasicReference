const express=require('express')
const router=express.Router();
const POST=require('./../models/Blogs')
//console.log(GET.Blogs)
router.get('/',(req,res)=>{
    res.render('blog',{path:'/blog',items:POST.fetch()})
})

router.get('/:id',(req,res)=>{
    console.log(POST.fetchsingle(req.params.id))
    res.render('single',{path:'/blog',item:POST.fetchsingle(req.params.id),edit:false})


})

module.exports=router


const POST=require('./../models/Blogs')

exports.getPage=(req,res)=>{
    res.render('create',{path:'/create'})
}

exports.postPage=(req,res)=>{
    console.log(req.body.Blog1)
    const value=new POST(req.body.Blog1,req.body.Blog2,req.body.Blog3);
    value.save();
    res.redirect('/blog')

}


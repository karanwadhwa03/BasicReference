const express=require('express')
const router=express.Router();
const GET=require('./../controller/createcontroller')

router.get('/',GET.getPage)

router.post('/',GET.postPage)

module.exports=router

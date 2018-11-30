const express=require('express');
const router=express.Router()

 //api
 router.get('/',(req,res,next)=>{
   res.send('API ROUTES');
 });

 module.exports=router;

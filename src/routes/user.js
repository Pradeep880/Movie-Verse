const express=require('express');
const router=express.Router();

const {login,signup,logout}=require("../Auth/authentication");
// const {auth,isStudent,isAdmin}=require('../middleware/auth')
router.post('/login',login);
router.post('/signup',signup);
// router.post('/logout',logout);

//for testing purpose
router.get('/',(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to testing page"
    })
});
router.get("/login",(req,res)=>{
     return res.status(200).json({
        success:true,
        message:req.body
     });
})


module.exports=router;
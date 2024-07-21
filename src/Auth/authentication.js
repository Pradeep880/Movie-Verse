const bcrypt=require('bcrypt');
const User=require('../Module/user')
//add JWT token 
const jwt=require('jsonwebtoken');
require("dotenv").config();
exports.signup=async(req,res)=>{
    try{
         //get value from user
         const {name,email,password}=req.body;
         //check is user already present
         const existingUser=await User.findOne({email});
         if(existingUser){
            return res.status(400).json({
                sucess:false,
                message:"User already exits"
            })
         }
         //secure password or hash password
         let hashPassword;
         try{
             //using bcrypt hash function we hashing our password
             //in hash function 10 is setrounds  means kitne rounds me hash krna h
             hashPassword=await bcrypt.hash(password,10);
              
         }catch(err){
            return res.status(400).json({
                sucess:false,
                massage:"Error in hashing password"
            })
         }
         //create entry for user using mongoose schema
         const user=await User.create({
            name,email,password:hashPassword
         });
         return res.status(200).json({
            sucess:true,
            massage:"User registered"
         })
         
    }
    catch(error){
       console.log("Eroor:"+error);
       return res.status(500).json({
        success:false,
        massage:"User not register,Try again Later"
       })
    }
};
//login handler

exports.login=async (req,res)=>{
    try{
         // get value from user
         const {email,password}=req.body;
        //validation for email and password
        if(!email||!password){
         return  res.status(400).json({
            success:false,
            message:"email and password is not correct"
         })
        } 
        //check for registered user
        let user=await User.findOne({email});
        //check user exist or not
        if(!user){
         return res.status(401).json({
            success:false,
            message:"User not exist first sign up then login "
         })
        }

        //create payload which is require to generate JWT token
        const payload={
           email:user.email,
           id:user.id,
           role:user.role
        }
        //verify password and generated JWT token
        //for doing this we use bcrypt compare function
        if(await bcrypt.compare(password,user.password)){
               //  password matched so we generated JWT token  
               // for doing this we have to have payload and JWT secret
               const token=jwt.sign(payload,process.env.JWT_SECRET,{
                  expiresIn:"2h"
               }) 
               //now we store token in user field(create new field token and store value of jwt token)
               //first we convert user to object then add token 
               user=user.toObject();
               user.token=token;
               //user ka object response me send krenge to password bhi send hoga so 
               //user ka password undefined kr denge
               user.password=undefined;
               //now create cookies
               const options={
                  expires:new Date(Date.now()+3*24*60*60*1000),
                  httpOnly:true

               }
               res.cookie("token",token,options).status(200).json({
                  success:true,
                  token,
                  user,
                  message:"User logged in successfully"
               })
        }else{
         // password not matched
         return res.status(403).json({
            success:false,
            message:"password Incorrect"
         })
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
         success:false,
         massage:"Login Failure"
        })
    }
}
exports.logout=async (res,req)=>{
   console.log(" we are in logout")
   req.session.destroy();
   return  res.status(200).json({
      success:true,
      message:"User Logged Out"
   })
}
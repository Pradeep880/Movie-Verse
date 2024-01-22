const jwt=require('jsonwebtoken');
require('dotenv').config();
exports.auth=(req,res,next)=>{
    try{
        //fetch token from body which we store in login form
        let token=req.body.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token not exists"
            })
        }
        //verify token using verify method
        try{

            const decode=jwt.verify(token, process.env.JWT_SECRET);
              console.log(decode);
            //add decode in user
            //basially we store paylaod for further uses like verify for role(student ,admin)
            req.user=decode;
            }catch(err){
            return res.status(401).json({
                success:false,
                message:"Token not decoded"
            })
           
        }
        next();
    }catch(err){
        console.log("Error in auth:"+err);
        return res.status(401).json({
            success:false,
            message:"Something went wrong while verfying user"
        })
    }  
}

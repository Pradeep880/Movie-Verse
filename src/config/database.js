const mongoose=require('mongoose');
require('dotenv').config(); 
exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
          useNewUrlParser:true,
    })
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err)=>{
        console.log("Error Occured:"+err);
        process.exit(1);
    })
}
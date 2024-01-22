const express=require('express');
const app=express();
require('dotenv').config(); 
const PORT=process.env.PORT||4000;
// app.listen(PORT,()=>{
//     console.log("Started at port 3000")
// });
app.use(express.json());
require('./config/database').connect();


//routes create and mount
const user=require('./routes/user');
app.use('/api/v1',user);
app.listen(PORT,()=>{
    console.log("server listening at 4000");
})
import  { useState } from 'react'
import '../components/style.css'
import Valid from 'validator';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Login=()=> {
  const navigate=useNavigate();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const [login,setLogin]=useState("");
    const handleSubmit=(e)=>{
      e.preventDefault();
        if(email&&password){
             const user={
              email:email,
              password:password
             }
             if(Valid.isEmail(email)){
              axios.post("http://localhost:4000/api/v1/login",user)
              .then((res)=>{
                setLogin(res.data.message);
                console.log(res.data.user.name);
                navigate('/home',
                  {
                   state:{
                        data:res.data.user.name
                    }
                    
                });
              }).catch((err)=>{
                //  console.log("Error:"+error);
                setLogin("user not found ");
                     console.log("Error Occured:"+err);
              })
            }else{
                 setLogin("Email is incorrect format");
            }
          }
         else{
          setLogin("First fill email and password")
        }
    }
  return (
        <div className="signin-section">
          <div className="logo-wrapper">
            <a href="/login">
              <img
                src="images/movieverse1.jpg"
                className="logo_in_signin"
                alt="movieverse-logo"
              />
            </a>
          </div>
          <div className="signin-container">
            <h1>Sign In</h1>
            <form className="signin" onSubmit={(e)=>handleSubmit(e)}>
              <input id="email-id" type="email" placeholder="Enter  your email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <input id="password-id" type="password" placeholder="Enter your password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {`${login}`}
            <button className="signin-btn" onClick={(e)=>handleSubmit(e)}>Sign In</button>
            </form>
            <div className="remember-me-section">
              <div className="checkbox-section">
                <input type="checkbox" />
                <label htmlFor="checkbox" className="remember-me-check-box">
                  Remember me
                </label>
              </div>
              <a href="/login" className="need-help-signin">
                Need help?
              </a>
            </div>
    
            <div className="signup-section">
              <p>
                New to Netflix?{" "}
                <a href="/signup" className="signup-btn">
                  Sign up now.
                </a>
              </p>
              <p className="recaptcha">
                This page is protected by Google reCAPTCHA to ensure you're not a
                bot. <a href="/">Learn more.</a>{" "}
              </p>
            </div>
          </div>
        </div>
  );
};
export default Login;
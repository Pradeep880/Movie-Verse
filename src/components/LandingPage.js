import { Routes, Route, Link } from "react-router-dom";
import Login from "../Auth/login";
import { useState } from "react";
import axios from 'axios';
import Valid from 'validator';
export const LandingPage = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [register,setRegister]=useState("");
   const handleSubmit=(e)=>{
       e.preventDefault();
        const user={
          name:name,
          email:email,
          password:password
        };
        console.log(user);
        if(name&&email&&password){

        if(Valid.isEmail(email)){
          axios.post("http://localhost:4000/api/v1/signup",user)
          .then((res)=>{
            setRegister(res.data.massage);
          
            console.log(res.data.massage);
          }).catch((err)=>{
            //  console.log("Error:"+error);
            setRegister("user already exist ");
                 console.log("Error Occured:"+err);
          })
        }else{
             setRegister("Email is incorrect format");
        }
      } else{
        setRegister("PlZ enter All Data");
      }
          
   }
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="showcase">
        <div className="showcase-inner">
          <div className="logo-wrapper">
            <Link to="/signup">
              <img src="images/movieverse1.jpg" className="logo" alt="movieverse-logo" />
            </Link>
          </div>
          <div className="header-right">
            <i className="fas fa-globe globe-icon "></i>

            <select className="select-btn" defaultValue={'DEFAULT'}>
              <option value="DEFAULT">English</option>
              <option>Français</option>
            </select>

            <Link to="/login">
              <button className="sign-in-btn">Sign In</button>
            </Link>
          </div>
        </div>
        <div className="showcase-content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere, Cancel anytime.</p>
          <p>
  {`Ready to watch? Enter your email to create or restart your membership.`}
          </p>
          <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input className="register_input" type="text" placeholder="Name" required value={name} onChange={(e)=>
            setName(e.target.value)}/><br></br>
            <input className="register_input" type="email"  placeholder="Email address" required value={email} onChange={(e)=>
            setEmail(e.target.value)}/><br></br>
            <input className="register_input" type="password" placeholder="Password" required value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }}/><br></br>
            <button className="get-started-btn" onClick={(e)=>handleSubmit(e)}>
              Get Started <i className="fas fa-chevron-right"></i>
            </button>
            </form>
            <p>{`${register}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

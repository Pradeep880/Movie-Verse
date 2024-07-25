import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Nav.css'
function Nav(props) {
    const navigate=useNavigate();
    const [show, handlescroll] = useState();
    const [details,setDetails]=useState(false);
    const changeDetails=()=>{
        console.log(props.name)
        console.log("this is details");
          details?setDetails(false):setDetails(true);
    }
    const logout=()=>{
        navigate('/login');
        //   axios.post("http://localhost:4000/api/v1/logout")
        //   .then((res)=>{
             
        //     console.log("logged Out:"+res)
        //     navigate('/login');
        //   }).catch((err)=>{
        //     console.log("Error Occured in logout")
        //   })
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                handlescroll(true)
            } else
                handlescroll(false)
        })
    }, []);
  return (

        <nav className={`Nav ${show?"Nav_black":undefined} `}>
            <img className="logo_in_Navbar_front" src="images/movieverse1.jpg" alt="Movie verse logo" />
            <button className="Sign_in" onClick={changeDetails}><img className="avatar_user_login"src="images/avatar_user_login.png" alt="User"/>
            </button>
             {details?
             <div className='details_home'>
                   <div className='details_child'> 
                   <img className='user_avatar_show' src="images/Netflix_avatar_user.png" alt='user'/>
                   <span className='user_name'>
                   {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
                    </span>
                    </div>
                   <div className='details_child'> Manage Profiles </div>
                   <div className='details_child'> Transfer Profiles </div>
                   <div className='details_child'> Account</div>
                   <div className='details_child'> Help Centre</div>
                   <div> 
                    <button className="logout" onClick={logout}>Logout</button>
                   </div>
             </div>:undefined}
            
        </nav> 
    
    )
}

export default Nav

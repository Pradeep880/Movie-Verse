import React, { useState,useEffect,useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Nav.css'
import { CiSearch } from "react-icons/ci";
import Search from './Search';
import { RxCross2 } from "react-icons/rx";
function Nav(props) {
    const navigate=useNavigate();
    const [list,setList]=useState([]);
    const [show, handlescroll] = useState();
    const [details,setDetails]=useState(false);
    const [search,setSearch]=useState("");
    const [toogleSearch,setToggleSearch]=useState(null);
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
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGY2YjdjNTVkZmRmYzZhMmVhODY0NzIxNDRhOTc2NCIsIm5iZiI6MTczMTg0NDM2Ny40MDk0MTg4LCJzdWIiOiI2MDAyZDMyNGJlNGIzNjAwM2Q1MzYxNzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rE4IXvV6dSRvT3V7FmHCKVoUr4yt4zDoxxTv83M54H0'
        }
      };
    const handleSearch=()=>{
         console.log(search);
         if(search!==""){
             const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
             axios.get(url,options)
             .then(res => {
                 console.log(res.data.results);
                 setList(res.data.results);
                 console.log(res.data.results.length)
                if(res.data.results.length>0)
                 setToggleSearch(true);
                else
                    setToggleSearch(false);
                }
            )
            .catch(err => {
             console.log(err);
             setToggleSearch(false);   
            });
        }

    }
    const handleInput=(event)=>{
        setSearch(event.target.value);
    }
    const handleToggle = useCallback(() => {
        console.log("handleToggle called");  
        setToggleSearch(null);
      }, []);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                handlescroll(true)
            } else
                handlescroll(false)
        })
    }, []);
  return (
  <>
        <nav className={`Nav ${show?"Nav_black":undefined} `}>
            <img className="logo_in_Navbar_front" src="images/movieverse1.jpg" alt="Movie verse logo" />
            <div className="search-box">
    <button className="btn-search"  onClick={handleSearch}><CiSearch/></button>
    <input type="text" className="input-search" value={search} placeholder="Type to Search..." 
   onChange={handleInput} required/>
  </div>
            <button className="Sign_in" onClick={changeDetails}><img className="avatar_user_login"src="images/avatar_user_login.png" alt="User" />
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
        {toogleSearch===true?<Search value={list} handleToggle={handleToggle}></Search>:toogleSearch===false?
        <div className="search-no-result">
            <button onClick={handleToggle} className='hide-button'><RxCross2/></button>
            <div className='search-no-result-text'>No Result</div>
        </div>:undefined}
        </>
    )
}

export default Nav

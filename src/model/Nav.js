import React, { useState,useEffect } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
function Nav(props) {
    // console.log(props)
    const [show, handlescroll] = useState();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                handlescroll(true)
            } else
                handlescroll(false)
        })
        // return () => {
        //     window.removeEventListener('scroll');
        // }
    }, []);
    return (
        <nav className={`Nav ${show?"Nav_black":undefined} ${props.Front?"Nav_front":undefined}`}>
            <img  src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="NelFlix logo" />
            {/* {!props.removeSign ? <button >Sign in</button> : null} */}
           {props.removeSign ? <Link className={` ${props.Password?"pass_Sign":"Sign_in"}`} to={{
                pathname:"/login",
            }}>{props.name}</Link>:null}
        </nav> 
    )
}

export default Nav

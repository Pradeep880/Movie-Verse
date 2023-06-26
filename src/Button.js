import React from 'react'
import './Button.css'
 function button(props) {
     return (
         <>
         <button className="ButtonSign"
           onClick={props.clicked}>{props.children}</button>  
         </>
     )
 }
 
 export default button
 
import React from 'react'
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import ReactPlayer  from 'react-player'
import movieTrailer from 'movie-trailer'
import './Row.css'
const baseImage = "https://image.tmdb.org/t/p/w500/" ;
const Search = ({ value, handleToggle }) => {
    const [TrailerUrl,SetTrailer]=useState("")
    console.log(value)
    const handleTrailer = (item) => {
        if (TrailerUrl)
            SetTrailer("")
         else {
            let original="";
               original=item.title?item.title:item.name;
            movieTrailer(original) 
                .then((res) => {
                    // console.log("res:"+res);
                    res?SetTrailer(res): SetTrailer("https://www.youtube.com/watch?v=QvbQtARquR8&ab_channel=Netflix")
                })
                .catch(error => {
                console.log(error)
            })
        }
        
    }
  return (
    <div className='search-results'>
        <button onClick={handleToggle} className='hide-button'><RxCross2/></button>
    <div className="Row_Poster">
      {value.map((item,index) => (
                     <div className={item.backdrop_path?"row-title":"row-title search-row"} key={index}>
                     <img 
                     onClick={()=>handleTrailer(item)}
                     key={item.id}
                     src={`${baseImage}${item.backdrop_path?item.backdrop_path:item.poster_path
                        }`}
                     alt={item.name}
                     >
                   </img>
                   <div>{item.title?item.title:item.name}</div> 
                  </div>  
            ))}
      
    </div>
    {TrailerUrl? <ReactPlayer url={TrailerUrl} controls={true} /> :null }
    </div>
  );
};

export default React.memo(Search);
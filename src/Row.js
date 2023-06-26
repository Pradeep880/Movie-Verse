
import React ,{useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const baseImage = "https://image.tmdb.org/t/p/w500/" 
// const baseImage="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,largeRow}) {
    const [Movies, setMovies] = useState([]);
    const [TrailerUrl,SetTrailer]=useState('')
    // console.log(Movies)
    // A snipet of code based on the specific condition/variable
    useEffect(() => {
        console.log("effect");
        async function fetchData() {
            const res = await axios.get(fetchUrl);
            // console.table(res.data.results);
            setMovies(res.data.results)
            return res;
        }
        fetchData();
    }, [fetchUrl]);
   
    // console.log(Movies)
    const opts = {
        width: "100%",
        height: "350px",
        playerVars: {
            autoplay:0,
        }
    }
    const handleTrailer = (item) => {
        if (TrailerUrl) {
            SetTrailer("")
        } else {
            console.log(item.name)
            movieTrailer(item?.name||"") 
                .then((url) => {
                    // https://www.youtube.com/watch?v=8U-zDpwm1Rk
                    const urlParams = new URLSearchParams(new URL(url).search); //we can use this for searching last url id(8U-zDpwm1Rk)
                                                                         //so we can search using .get("v") because after v our last url id present
                    SetTrailer(urlParams.get('v'));
                    console.log(url);
                })
                .catch(error => {
                console.log(error)
            })
        }
        
    }
    return (
        <div className="Row"> 
            {/* Title */}
            <h2>{title}</h2>
            {/* All Movie Container  */}
            <div className="Row_Poster">
                 {Movies.map((item) => (
                     <img className={`Row_img ${largeRow ? "Row_large" : undefined}`} 
                         onClick={()=>handleTrailer(item)}
                  key={item.id}
                  src={`${baseImage}${largeRow?item.poster_path:item.backdrop_path}`}
                   alt={item.name}
                   ></img>
            ))}
            </div>
           {TrailerUrl? <Youtube videoId={TrailerUrl} opts={opts}></Youtube>:null }
        </div>
        
    )
}
// shortcut for console.log=>clg
// shortcut for component=>rfce
// Youtube(It is component of  npm package 'react-youtube') it allow us to use Youtube Video
// movieTrailer(It is  function npm package 'movie-trailer') it is find on youtube when we give name to this  
export default Row;
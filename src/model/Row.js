
import React ,{useState,useEffect} from 'react'
import axios from '../config/axios'
import './Row.css'
import ReactPlayer  from 'react-player'
import movieTrailer from 'movie-trailer'
const baseImage = "https://image.tmdb.org/t/p/w500/" 
// const baseImage="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,largeRow}) {
    const [Movies, setMovies] = useState([]);
    const [TrailerUrl,SetTrailer]=useState("")
    // console.log(Movies)
    // A snipet of code based on the specific condition/variable
    useEffect(() => {
        console.log("effect");
        async function fetchData() {
            const res = await axios.get(fetchUrl);
            // console.log(res.data.results);
            setMovies(res.data.results)
            return res;
        }
        fetchData();
    }, [fetchUrl]);

    const handleTrailer = async (item) => {
        if (TrailerUrl) {
            SetTrailer("");
        } else {
            let original = item.title ? item.title : item.name;
            try {
                const res = await movieTrailer(original);
                if (res) {
                    SetTrailer(res);
                } else {
                    SetTrailer("https://www.youtube.com/watch?v=QvbQtARquR8&ab_channel=Netflix");
                }
            } catch (error) {
                console.error("Error finding trailer:", error);
                SetTrailer("https://www.youtube.com/watch?v=QvbQtARquR8&ab_channel=Netflix");
            }
        }
    };
        
    return (
        <div className="Row"> 
            {/* Title */}
            <h2>{title}</h2>
            {/* All Movie Container  */}
            <div className="Row_Poster">
                 {Movies.map((item,index) => (
                     <div className='row-title' key={index}>
                     <img className={`Row_img ${largeRow ? "Row_large" : undefined}`} 
                     onClick={()=>handleTrailer(item)}
                     key={item.id}
                     src={`${baseImage}${largeRow?item.poster_path:item.backdrop_path}`}
                     alt={item.name}
                     >
                   </img>
                   <div>{item.title?item.title:item.name}</div> 
                  </div>  
            ))}
            </div>
            
           {TrailerUrl? <ReactPlayer url={TrailerUrl} controls={true} /> :null }
        </div>
        
    )
}
// Youtube(It is component of  npm package 'react-youtube') it allow us to use Youtube Video
// movieTrailer(It is  function npm package 'movie-trailer') it is find on youtube when we give name to this  
export default Row;


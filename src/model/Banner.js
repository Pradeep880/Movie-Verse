import React ,{useState,useEffect} from 'react'
import Button from './Button'
import requests from '../config/requests'
import axios from '../config/axios'
import './Banner.css'
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player'
// const baseUrl="https://image.tmdb.org/t/p/original/"
const Banner=(props)=> {
    const [movie, getMovie] = useState([]);
    const [TrailerUrl,SetTrailer]=useState(undefined);
    useEffect(() => {
        async function fetchData() {
        
              await axios.get(requests.fetchDocumentry).then(res=>{
               const r=Math.round(Math.random()*res.data.results.length-1);
                getMovie(res.data.results[r]);
                console.log(res.data.results)
            }).catch(err=>{
                console.log(err);
            })
            
            // console.log(res.data.results[r]);
          
        }
        fetchData();
    }, [])
    // console.log(movie)
    const Playvideo = () => {
        console.log(movie.original_title)
        TrailerUrl===undefined?
        movieTrailer(movie.original_title)
        .then((res)=>{
          res?SetTrailer(res): SetTrailer("https://www.youtube.com/watch?v=QvbQtARquR8&ab_channel=Netflix");
        }):SetTrailer(undefined);
        
    }
    const MyList = () => {
        console.log("MYList")
    }
    // const backGroundImage = `${baseUrl}${movie.poster_path}`;
    // console.log(backGroundImage)
    const style = {
        backgroundSize:"cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }
    // console.log(style)
   //  movie?.name || movie?.original_name    it is checking name is present or not(? is using like a if else)
    return (
  <>
        <header className="Banner" style={style}>
            <div className='banner_head'>
            <div className="content">
                 <h1 className="title">{ movie?.name || movie?.original_title }</h1>
            <div>
                <Button clicked={Playvideo}>{TrailerUrl===undefined?'Play':'Pause'}</Button>
                <Button clicked={MyList}>My List</Button>
            </div>
            <div className="description">
                {/* Description */}
                {movie.overview}
                {/* {console.log(movie)} */}
            </div>
            </div>
            <div className='trailer'>
            {TrailerUrl?<ReactPlayer url={TrailerUrl} controls={true}></ReactPlayer>:undefined}
            </div>
            </div>
            <div className="fadecontent"></div>
        </header>
       
        </>
    )
}

export default Banner


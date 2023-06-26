import React ,{useState,useEffect} from 'react'
import Button from './Button'
import requests from './requests'
import axios from './axios'
import './Banner.css'
// const baseUrl="https://image.tmdb.org/t/p/original/"
const Banner=(props)=> {
    const [movie, getMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(requests.fetchOrignals)
            // console.log(res.data.results)
            const r=Math.round(Math.random()*res.data.results.length-1);
            // console.log(res.data.results[r]);
            getMovie(res.data.results[r]);
        }
        fetchData();
    }, [])
    // console.log(movie)
    const Playvideo = () => {
        console.log("play")
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

        <header className="Banner" style={style}>
            <div className="content">
                 {/* Title */}
                 <h1 className="title">{ movie?.name || movie?.original_name }</h1>
            <div>
                <Button clicked={Playvideo}>Play</Button>
                <Button clicked={MyList}>My List</Button>
            </div>
            <div className="description">
                {/* Description */}
                {movie.overview}
            </div>
            </div>
            <div className="fadecontent"></div>
        </header>
    )
}

export default Banner


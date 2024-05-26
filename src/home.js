import React from 'react'
import './home.css'
import Nav from './model/Nav'
import Banner from './model/Banner'
import Row from './model/Row'
import requests from './config/requests'
import { useLocation } from 'react-router-dom'
function Home () {
  const {state}=useLocation();
  if(!state){
    return (
      <h1> If you are not login so you can not watch home page </h1>
    )
  }
  return (
    <div className='Home'>
        <Nav name={state.data}></Nav>
      <Banner ></Banner>
            {/* Title */}
            {/* we want netflix original in large */}
      <Row title="Top Trending" largeRow fetchUrl={ requests.fetchTrending}/>
      <Row title="Nelflix Orignals" fetchUrl={requests.fetchOrignals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentry" fetchUrl={requests.fetchDocumentry} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> 
  </div>
  )
}

export default Home 
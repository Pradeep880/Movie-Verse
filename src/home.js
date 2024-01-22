import React from 'react'
import './home.css'
import Nav from './model/Nav'
import Banner from './model/Banner'
import Row from './model/Row'
import requests from './config/requests'
function home () {
  return (
    <div className='Home'>
        <Nav removeSign></Nav>
      <Banner></Banner>
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

export default home 
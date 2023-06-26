import React from 'react';
import Row from './Row'
import './App.css';
import Banner from './Banner'
import requests from './requests'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
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
  );
}

export default App;


let APIKey = "40f6b7c55dfdfc6a2ea86472144a9764"
const requests = {
    fetchTrending:`/trending/all/week?api_key=${APIKey}&language=en-US`,
    fetchOrignals:`/discover/tv?api_key=${APIKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKey}&with_genres=28`,
    fetchRomanticMovies:`/discover/movie?api_key=${APIKey}&with_genres=35`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKey}&with_genres=27`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKey}&with_genres=10749`,
    fetchDocumentry:`/discover/movie?api_key=${APIKey}&with_genres=99`,
}
export default requests;
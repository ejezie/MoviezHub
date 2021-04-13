const API_KEY = "92326d2fddbf8e122cb3820d78c8b3e6";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fecthTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
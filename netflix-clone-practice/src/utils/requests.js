

let API_KEY=  process.env.REACT_APP_API_KEY;

const requests = {
fetchTrending:'/trending/all/day?api_key=$[API_KEY]&language-en=US',
fetchNetflixOriginals:'/discover/tv?api_key=$[API-KEY]&language=en-US&with_networks=213',
fetchTopRateMovies:'/movie/top_rated?api-key$[API_KEY]&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_monetization_types=%22top_rated%22',
fetchActionMovies:'/discover/movie?api_key=$[API_KEY]&with_genres=28',
fetchComedyMovies:'/discover/movie?api_key=$[API_KEY]&with_genres=35',
fetchHorrorMovies:'/discover/movie?api_key=$[API_KEY]&with_genres=27',
fetchRomanticMovies:'/discover/movie?api_key=$[API_KEY]&with_genres=10749',
fetchDocumentaries:'/discover/movie?api_key=$[API_KEY]&with_genres=99',
fetchTvShow:'/tv/popular?api_key=$[API_KEY]&language-en=US&page=1',
};


export default requests;
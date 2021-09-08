const API_KEY = "364b9900276e40dd11dc6a064ff14640"
const trending = `trending/all/week?api_key=${API_KEY}&languange=en-US`
const topRated = `movie/top_rated?api_key=${API_KEY}&with_genres=28`
const netflixOriginal = `discover/tv?api_key=${API_KEY}&with_networks=213`
const actionMovies = `discover/movie?api_key=${API_KEY}&with_genres=28`
const comedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`
const horrorMovies = `discover/movie?api_key=${API_KEY}&with_genres=27`
const documentariesMovies = `discover/movie?api_key=${API_KEY}&with_genres=99`

const fetchMovie = {
    trending,
    topRated,
    netflixOriginal,
    actionMovies,
    comedyMovies,
    horrorMovies,
    documentariesMovies
}


module.exports = fetchMovie
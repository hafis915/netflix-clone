const axios = require("axios")


const getMovies = async (url) => {
    const resp = await axios.get("https://api.themoviedb.org/3/" + url)
    return resp.data
}


module.exports = getMovies
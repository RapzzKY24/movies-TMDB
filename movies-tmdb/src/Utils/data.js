const API_KEY = '69e280d8579a105194b70f3b7a3ef86a'
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/`

const GetData = async () => {
    try {
        const response = await fetch(BASE_URL)
        const responseJson = await response.json()
        return responseJson.results
    } catch (err) {
        console.log(err)
        return []
    }
}

const SearchMovies = async (query) => {
    try {
        console.log("Searching API for:", query)
        const response = await fetch(`${SEARCH_URL}${encodeURIComponent(query)}`)
        const responseJson = await response.json()
        console.log("Search results:", responseJson.results)
        return responseJson.results
    } catch (err) {
        console.error("Search error:", err)
        return []
    }
}

const GetMovieById = async (movieId) => {
    try {
        console.log("Fetching movie details for ID:", movieId)
        const response = await fetch(`${MOVIE_DETAIL_URL}${movieId}?api_key=${API_KEY}`)
        const responseJson = await response.json()
        console.log("Movie details:", responseJson)
        return responseJson
    } catch (err) {
        console.error("Error fetching movie details:", err)
        return null
    }
}

export {
    GetData,
    SearchMovies,
    GetMovieById,
    IMAGE_URL,
}

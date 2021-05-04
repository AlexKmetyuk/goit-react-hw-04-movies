const apiKey = 'e08e09a39301719c8287505d2e7e50ba'
const baseUrl = 'https://api.themoviedb.org/3'

export const getTrendingMovies = () => {
    return fetch(`${baseUrl}/trending/all/day?api_key=${apiKey}`)
        .then(res => res.json())
}

export const searchMoviesByQuery = query => {
    return fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`)
        .then(res => res.json())
}

export const getMovieDetails =  (id) => {
    return fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
        .then(res => res.json())
} 

export const getMovieCreditsById = (id)=> {
    return fetch(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`)
        .then(res => res.json())
}

export const getMovieReviewsById = (id) => {
    return fetch(`${baseUrl}/movie/${id}/reviews?api_key=${apiKey}`)
        .then(res => res.json())
}
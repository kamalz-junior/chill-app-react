export const API_URL = "https://67e7fb1320e3af747c40120e.mockapi.io";

const apiKey = import.meta.env.VITE_APP_APIKEY;
const token = import.meta.env.VITE_APP_TOKEN;
const baseUrl = "https://api.themoviedb.org/3";
const accountId = 21941508
export const imgUrl = "https://image.tmdb.org/t/p/w500";

export async function getUsers() {
    const response = await fetch(`${API_URL}/users`);

    if(!response.ok){
        return new Error(response.statusText);
    }
    return await response.json();
}

// Series
export const getTvPopular = async () => {
    const response = await fetch(`${baseUrl}/tv/popular?page=1&api_key=${apiKey}`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const seriesPopular = await response.json();
    return seriesPopular.results;
};

export const getTvTop = async () => {
    const response = await fetch(`${baseUrl}/tv/top_rated?page=1&api_key=${apiKey}`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const seriesTop = await response.json();
    return seriesTop.results;
};

export const getTv = async () => {
    const response = await fetch(`${baseUrl}/discover/tv?page=2&api_key=${apiKey}`);

    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tv = await response.json();
    return tv.results;
}
export const getTvRelease = async () => {
    const response = await fetch(`${baseUrl}/tv/airing_today?page=1&api_key=${apiKey}`);

    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tvRelease = await response.json();
    return tvRelease.results;
}


// Movies
export const getMovies = async () => {
    const response = await fetch(`${baseUrl}/movie/upcoming?page=2&api_key=${apiKey}`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const movies = await response.json();
    return movies.results;
};
export const getMoviesPopular = async () => {
    const response = await fetch(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const moviesPopular = await response.json();
    return moviesPopular.results;
};

export const getMoviesTop = async () => {
    const response = await fetch(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const moviesTop = await response.json();
    return moviesTop.results;
};

export const getMoviesRelease = async () => {
    const response = await fetch(`${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const moviesRelease = await response.json();
    return moviesRelease.results;
};

// Watchlist
export const getWatchlist = async () => {
    const responseMovies = await fetch(`${baseUrl}/account/${accountId}/watchlist/movies?page=1&api_key=${apiKey}`, {
        headers: {Authorization: `Bearer ${token}`}});
    const responseTv = await fetch(`${baseUrl}/account/${accountId}/watchlist/tv?page=1&api_key=${apiKey}`, {
        headers: {Authorization: `Bearer ${token}`}});
    
    if (!responseMovies.ok && !responseTv.ok ) {
        throw new Error(`HTTP error! status: ${responseMovies.status} ${responseTv.status}`);
    }

    const watchlistMovies = await responseMovies.json();
    const watchlistTv = await responseTv.json();
    return [...watchlistMovies.results, ...watchlistTv.results];
};

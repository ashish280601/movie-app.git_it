// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_TO_FAVOURITES = 'REMOVE_TO_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

// action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    };
}

export function addFavourite(movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie
    };
}

export function removeFromFavourite(movie) {
    return {
        type: REMOVE_TO_FAVOURITES,
        movie
    };
}

export function setShowFavourites(value) {
    return {
        type: SET_SHOW_FAVOURITES,
        value
    };
}

export function addMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie 
    };
}

export function handleMovieSearch (searchText) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    return function (dispatch) {
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie', movie);

            // dispatch an action
            dispatch(addMovieSearchResult(movie));
        })
    }
}

export function addMovieSearchResult (movie) {
    return{
        type: ADD_SEARCH_RESULT,
        movie
    }
}
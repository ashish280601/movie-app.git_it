// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_TO_FAVOURITES = 'REMOVE_TO_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

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
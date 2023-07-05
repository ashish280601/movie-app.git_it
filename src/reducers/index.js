import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_SEARCH_RESULT,
  ADD_TO_FAVOURITES,
  REMOVE_TO_FAVOURITES,
  SET_SHOW_FAVOURITES,
  ADD_MOVIE_TO_LIST,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initialMoviesState, action) {
  console.log("Movies Reducer");
  // Generally in react code react community prefer to use switch case instead of if else condition
  // if (action.type === ADD_MOVIES) {
  //     return {
  //         ...state,
  //         list: action.movies
  //     };
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state, // using spread operator
        list: action.movies,
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_TO_FAVOURITES:
      const filteredArray = state.favourites.filter(
        //filter array give new array
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.value,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}
const initialSearchState = {
  result: {},
  showSearchResults: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false
      };
    default:
      return state;
  }
}

// const initialRootState = {
//   movies: initialMoviesState,
//   search: initialSearchState
// }

// export default function rootReducer (state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   }
// }

export default combineReducers({
  movies,
  search,
});

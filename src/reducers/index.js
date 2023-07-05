import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
};
export default function movies(state = initialMoviesState, action) {
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
        ...state,       // using spread operator
        list: action.movies,
      };
    case ADD_FAVOURITE:
        return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        }
    default:
      return state;
  }
}

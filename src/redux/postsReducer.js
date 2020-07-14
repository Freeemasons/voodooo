import {SHOW_POSTS_SUCCESS, SHOW_AUTHORS_SUCCESS} from "./types";

const initialState = [];

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POSTS_SUCCESS:
      return [ ...state, ...action.payload];
    default: return state;
  }
}

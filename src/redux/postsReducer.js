import {SHOW_POSTS, SHOW_POSTS_SUCCESS} from "./types";

const initialState = [];

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POSTS_SUCCESS:
      debugger;
      return [ ...state, ...action.payload];
    default: return state;
  }
}

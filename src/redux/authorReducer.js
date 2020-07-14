import {SHOW_AUTHORS_SUCCESS} from "./types";

const initialState = [];

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_AUTHORS_SUCCESS:
      return [ ...state, ...action.payload];
    default: return state;
  }
}

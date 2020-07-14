import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {authorReducer} from './authorReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  authors: authorReducer
})


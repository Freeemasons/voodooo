import {SHOW_POSTS, SHOW_AUTHORS} from './types'

export function showPost(post) {
  return {
    type: SHOW_POSTS
  }
}

export function showAuthors(author) {
  return {
    type: SHOW_AUTHORS
  }
}

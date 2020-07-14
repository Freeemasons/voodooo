import {SHOW_POSTS, SHOW_POSTS_SUCCESS, SHOW_AUTHORS, SHOW_AUTHORS_SUCCESS} from "./types";
import {takeEvery, put, call} from "@redux-saga/core/effects";


export function* sagasWatcher () {
  yield takeEvery(SHOW_POSTS, sagaWorker)
  yield takeEvery(SHOW_AUTHORS, sagaWorkerAuthor)
}

function* sagaWorker() {

  const payload = yield call(getPosts);
  yield put({type: SHOW_POSTS_SUCCESS, payload  })

}

function* sagaWorkerAuthor() {

  const payload = yield call(getAuthors);
  yield put({type: SHOW_AUTHORS_SUCCESS, payload  })

}

async function getPosts() {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  return await response.json();
}

async function getAuthors() {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  return await response.json();
}

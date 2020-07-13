import {SHOW_POSTS, SHOW_POSTS_SUCCESS} from "./types";
import {takeEvery, put, call} from "@redux-saga/core/effects";


export function* sagasWatcher () {
  yield takeEvery(SHOW_POSTS, sagaWorker)
}

function* sagaWorker() {
  debugger;
  const payload = yield call(getPosts);
  debugger;
  yield put({type: SHOW_POSTS_SUCCESS, payload  })
}

async function getPosts() {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  return await response.json();
}

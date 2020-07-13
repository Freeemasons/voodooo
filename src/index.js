import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer";

import createSagaMiddleware from 'redux-saga'
import {sagasWatcher} from "./redux/sagas";



const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagasWatcher)


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)



render(app, document.getElementById('root'));

serviceWorker.unregister();

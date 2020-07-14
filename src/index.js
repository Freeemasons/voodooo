import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer";

import createSagaMiddleware from 'redux-saga'
import {sagasWatcher} from "./redux/sagas";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';



const saga = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    saga
  )
))

saga.run(sagasWatcher)


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)


render(app, document.getElementById('root'));

serviceWorker.unregister();

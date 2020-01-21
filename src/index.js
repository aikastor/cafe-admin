import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import addItemReducer from "./store/reducers/addItemReducer";
import thunkMiddleware from 'redux-thunk';

import App from './App';
import './index.css';
import {Provider} from "react-redux";

const rootReducer = combineReducers({
  addItem:addItemReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const app =(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>

  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));



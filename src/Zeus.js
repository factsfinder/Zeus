import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer.js';
import HomeView from './views/HomeView/HomeView.js';

const middleWares = [thunk];
const Store = createStore(rootReducer, applyMiddleware(...middleWares));

const Zeus = () => (
  <Provider store={Store}>
    <HomeView />
  </Provider>
);

export default Zeus;
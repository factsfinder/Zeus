import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducer.js';

import Zeus from './src/Zeus.js';
import SendView from './src/views/SendView.js';
import AccountView from './src/views/AccountView.js';

import './shim.js';

const middleWares = [thunk];
const Store = createStore(rootReducer, applyMiddleware(...middleWares));

const Main = (props) => (
  <Provider store={Store}>
    <Zeus 
      onNavClick={(view) => props.navigation.navigate(view)} 
      navigateToAccount={(view) => props.navigation.navigate('Account')}
    />
  </Provider>
);

const RootStack = StackNavigator({
  Home: { screen: Main, navigationOptions: { header: null } },
  Account: { screen: AccountView, navigationOptions: { headerTitle: 'Account' } },
  Send: { screen: SendView, navigationOptions: { headerTitle: 'Send Assets' } },
},
  { initialRouteName: 'Home' },
  { headerMode: 'screen' }
);


AppRegistry.registerComponent('Zeus', () => RootStack);

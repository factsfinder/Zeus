import React from 'react';
import { View } from 'react-native';
import HomeView from './views/HomeView/HomeView.js';

const Zeus = (props) => {
  return (
    <HomeView 
      onNavClick={props.onNavClick} 
      navigateToAccount={props.navigateToAccount}
    />
  );
};

export default Zeus;
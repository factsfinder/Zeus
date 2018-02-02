import React, {Component} from 'react';
import {
  StyleSheet,
  Text, View, StatusBar
} from 'react-native';

export default class NewsScreen extends Component {
  static navigationOptions = {
    title: 'Stellar News'
  };
  render(){
    return (
      <View>
        <Text> This is where you will Stellar Updates..!</Text>
    </View>
    );
  }
}
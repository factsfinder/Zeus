import React, {Component} from 'react';
import {
  StyleSheet,
  Text, View, StatusBar
} from 'react-native';

export default class TradeScreen extends Component {
  static naviagationOptions = {
    title: 'TadeScreen'
  };
  render(){
    return (
      <View>
        <Text> Trade Cypto..! Coming Soon..!</Text>
    </View>
    );
  }
}
import React, {Component} from 'react';
import {
  StyleSheet,
  Text, View, StatusBar
} from 'react-native';

export default class WalletScreen extends Component {
  static naviagationOptions = {
    title: 'WalletScreen'
  };
  render(){
    return (
      <View>
        <Text> This is where you will check your wallet balance and all..!</Text>
    </View>
    );
  }
}
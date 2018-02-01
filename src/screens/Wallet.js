import React, {Component} from 'react';
import {
  StyleSheet,
  Text, View, StatusBar
} from 'react-native';

export default class WalletScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return (
      <View>
        <Text> This is where you will check your wallet balance and all..!</Text>
    </View>
    );
  }
}
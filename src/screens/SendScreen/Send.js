import React, {Component} from 'react';
import {
  StyleSheet,
  Text, View, StatusBar
} from 'react-native';

export default class SendScreen extends Component {
  static naviagationOptions = {
    title: 'SendScreen'
  };
  render(){
    return (
      <View>
        <Text> Send XLM,,!</Text>
    </View>
    );
  }
}
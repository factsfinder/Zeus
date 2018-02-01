import React, {Component} from 'react';
import {
  StyleSheet,
  Text, View, StatusBar
} from 'react-native';

export default class AssetsScreen extends Component {
  static naviagationOptions = {
    title: 'AssetsScreen'
  };
  render(){
    return (
      <View>
        <Text> Trust Assets..!</Text>
    </View>
    );
  }
}
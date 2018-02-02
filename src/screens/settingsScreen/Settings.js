import React, {Component} from 'react';
import {
  StyleSheet,
  Text, View, StatusBar
} from 'react-native';

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = {
    title: 'Settings'
  };

  render(){
    return (
      <View>
        <Text> This is where you change your settings..!</Text>
    </View>
    );
  }
}
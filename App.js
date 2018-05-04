import React, { Component } from 'react';
import { AppRegistry ,StyleSheet, Text, View, Settings } from 'react-native';
import Main from './src/Main';

export default class App extends Component {
  render() {
    return (
      <View style={styles.AppContainer}>
        <Main/>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => Main);

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1
  }
});
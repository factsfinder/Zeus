import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1
  }
});
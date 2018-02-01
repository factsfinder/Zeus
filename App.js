import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MainMenu from './src/Menus/MainMenu';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  menuView: {
    width: 150
  }
});

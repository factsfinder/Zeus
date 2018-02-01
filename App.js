import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MainMenu from './src/Menus/MainMenu';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Zeus</Text>
          <View><MainMenu/></View>
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
  header: {
    fontSize: 80,
    fontFamily: 'Tangerine',
    color: '#000000',
  }
});

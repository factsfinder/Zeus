import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import MainMenu from './Menus/MainMenu';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Header/>
          <MainMenu/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6'
  }
});

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({}) =>  <Text style={styles.header}>Zeus</Text>

const styles = StyleSheet.create({
  header: {
    fontSize: 80,
    fontFamily: 'Tangerine',
    color: '#000000',
  }
});

export default Header;
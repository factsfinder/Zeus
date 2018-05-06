import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-fa-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon name='bolt' style={styles.logo} />
      <Text style={styles.title}>Zeus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#00ef61',
    elevation: 8
  },

  title: {
    fontSize: 50,
    fontFamily: 'Tangerine',
    color: '#000000',
    paddingTop: 5
  },

  logo: {
    color: '#000000',
    fontSize: 45,
    paddingTop: 5,
    transform: [
      { rotate: '30deg' }
    ]
  }
});

export default Header;
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-fa-icons';

const Header = ({}) =>  {
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
    justifyContent: 'center'
  },
  title: {
    fontSize: 80,
    fontFamily: 'Tangerine',
    color: '#000000',
  },
  logo: {
    color: '#000000',
    fontSize: 60,
    marginTop: 10,
    transform: [
      {rotate: '30deg'}
    ]
  }
});

export default Header;
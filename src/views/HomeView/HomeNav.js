import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Block from '../components/Block.js';

const homeNavOptions = ['History', 'Send', 'Assets', 'Effects', 'Trade', 'Convert', 'Inflation', 'Settings', 'Logout'];

const HomeNav = (props) => {
  return (
    <View style={styles.homeNav}>
      {homeNavOptions.map((option, index) => (
        <Block key={option} blockStyles={styles.homeNavBlock} onPress={() => props.onNavClick(option)}>
          <Text style={styles.homeNavBlockText}>{option}</Text>
        </Block>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  homeNav: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },

  homeNavBlock: {
    width: 80,
    height: 80,
    backgroundColor: '#ffffff',
    shadowColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5
  },

  homeNavBlockText: {
    fontFamily: 'JosefinSlab-Regular',
    fontSize: 15,
    color: '#000000'
  }
});

export default HomeNav;
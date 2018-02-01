import React, {Component} from 'react';
import {View, Alert, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

const MenuBlock = ({onMenuClick, name}) => {
  return (
    <TouchableNativeFeedback onPress={onMenuClick}>
      <View style={styles.menuBlock}>
        <Text style={styles.menuText}>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  menuBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 135, 
    height: 135, 
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    margin: 10,
    elevation: 5,
    borderRadius: 5
  },
  menuText: {
    color: '#000000',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Josefin'
  }
})

export default MenuBlock;
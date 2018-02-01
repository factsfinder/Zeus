import React, {Component} from 'react';
import {View, Alert, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-fa-icons';

const MenuBlock = ({onMenuClick, name, iconName}) => {
  return (
    <TouchableNativeFeedback onPress={onMenuClick}>
      <View style={styles.menuBlock}>
        <Icon name={iconName} style={styles.iconStyles}/>
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
  },
  iconStyles: {
    fontSize: 25,
    color: '#000000'
  }
})

export default MenuBlock;
import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-fa-icons';

const Block = ({onClick, iconExists, textExists, blockText, blockIcon, blockStyles, iconStyles, textStyles}) => {
  return (
    <TouchableNativeFeedback onPress={onClick}>
      <View style={[styles.block, blockStyles]}>
        {iconExists && <Icon name={blockIcon} style={[iconStyles, styles.icon]}/>}
        {textExists && <Text style={[textStyles, styles.text]}>{blockText}</Text>}
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    margin: 10,
    elevation: 5,
    borderRadius: 5
  },
  text: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Josefin'
  },
  icon: {
    color: '#000000'
  }
});

export default Block;
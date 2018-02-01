import React, {Component} from 'react';
import {View, Alert, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

export default class MenuBlock extends Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onMenuClick}>
        <View style={styles.menuBlock}>
          <Text style={styles.menuText}>
            {this.props.name}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
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
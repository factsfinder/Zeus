import React, {Component} from 'react';
import {View, Alert, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

export default class MenuBlock extends Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onMenuClick}>
        <View style={styles.menuBlock}>
          <Text style={styles.menuText}>
            {this.props.icon}
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
    width: 150, 
    height: 150, 
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  menuText: {
    color: '#000000',
    fontSize: 24,
    textAlign: 'center'
  }
})
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-fa-icons';
import Block from '../../components/Block';

export default class MultiWalletState extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>All your wallets</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyles: {
    fontSize: 40,
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    fontFamily: 'Josefin'
  }
})
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Stellar from '../../stellar/Stellar.js';
import Header from '../Header.js';
import HomeNav from './HomeNav.js';
import Block from '../../components/Block.js';

class HomeView extends Component {
  state = {};

  componentDidMount() {
    if (Stellar.getAccountInfo() == null) {
      Stellar.createAccount();
    }
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <Header />
        <View style={styles.homeInfo}>
          <Block blockStyles={styles.balanceBlock}>
            <Text style={styles.balanceBlockText}>Balances: </Text>
          </Block>
          <Text style={styles.viewAccountText}>View your account >></Text>
        </View>
        <View style={styles.homeNavOptions}>
          <HomeNav />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column'
  },

  homeInfo: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#00ef61',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },

  balanceBlock: {
    width: 250,
    height: 120,
    backgroundColor: '#000000',
    shadowColor: '#000000'
  },

  balanceBlockText: {
    fontFamily: 'JosefinSlab-Regular',
    fontSize: 20,
    color: '#ffffff'
  },

  viewAccountText: {
    color: '#000000',
    fontFamily: 'JosefinSlab-Regular',
    paddingTop: 10
  },

  homeNavOptions: {
    flex: 2,
  }
});

export default HomeView;
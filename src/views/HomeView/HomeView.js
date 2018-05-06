import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Stellar from '../../stellar/Stellar.js';
import { createAccount } from '../../redux/actions.js';
import Header from '../components/Header.js';
import HomeNav from './HomeNav.js';
import AccountBalances from './AccountBalances.js';

class HomeView extends Component {
  state = {};

  componentDidMount() {
    if (Stellar.getAccountInfo() == null) {
      this.props.createAccount();
    }
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <Header />
        <View style={styles.homeInfo}>
          <AccountBalances balances={this.props.balances} />
          <Text style={styles.viewAccountText}>View your account >></Text>
        </View>
        <View style={styles.homeNavOptions}>
          <HomeNav />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  balances: state.balances || []
});

const mapDispatchToProps = (dispatch) => ({
  createAccount: () => dispatch(createAccount())
});

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

  viewAccountText: {
    color: '#000000',
    fontFamily: 'JosefinSlab-Regular',
    paddingTop: 10
  },

  homeNavOptions: {
    flex: 2,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
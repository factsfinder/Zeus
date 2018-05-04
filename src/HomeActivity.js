import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Stellar from './stellar/services';

class HomeActivity extends Component {
  state = {};

  createAccount = () => {
    Stellar.createAccount();
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => this.createAccount()}
          title="Create Account"
          color="#00a6ef"
        />
      </View>
    );
  }
}

export default HomeActivity;
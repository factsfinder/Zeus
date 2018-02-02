import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ZeroWalletState from './ZeroWalletState';
import MultiWalletState from './MultiWalletState';

export default class WalletScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletNum: 0
    }
  }

  static navigationOptions = { title: 'Your Wallets' };

  componentDidMount = () => {}

  getWallets = () => {}

  render() {
    let walletNum = this.state.walletNum;
    let walletStyles = walletNum > 0 ? styles.walletsContainer: styles.zeroWalletContainer;
    return (
      <View style={walletStyles}>
        {walletNum === 0 ?
          <ZeroWalletState />
        :
          <MultiWalletState />
        }
      </View>
    );
  }
}

const styles= StyleSheet.create({
  walletsContainer: {},
  zeroWalletContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
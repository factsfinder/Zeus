import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Block from '../../components/Block';

const ZeroWalletState = ({ createWallet })  => {
  return (
    <View>
      <Block
        iconExists={true}
        textExists={true}
        blockIcon='plus-circle'
        blockText='Create Wallet'
        onClick={createWallet}
        iconStyles={styles.blockIcon}
        textStyles={styles.blockText}
        blockStyles={styles.block}
      />
      <Text style={styles.infoText}>
        You haven't created any wallets. Create one now..!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: 200,
    height: 100,
    marginTop: -50,
    alignSelf: 'center'
  },
  blockIcon: {
    fontSize: 28,
  },
  blockText: {
    fontSize: 25,
  },
  infoText: {
    fontSize: 15,
    fontFamily: 'Josefin',
    color: '#000000'
  }
})

export default ZeroWalletState;
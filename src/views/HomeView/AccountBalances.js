import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Block from '../components/Block.js';

const AccountBalances = ({ balances }) => {
  const accountBalances = balances && balances.map((balance, index) => (
    <Text key={index} style={styles.balancesText}>
      {'\u2022'} {balance.asset_type === 'native' ? 'XLM' : balance.asset_type}: {balance.balance}
    </Text>
  ));
  return (
    <Block blockStyles={styles.balanceBlock}>
      {balances && balances.length > 0
        ? accountBalances
        : <Text style={styles.balancesLoadingText}>Loading account balances...</Text>
      }
    </Block>
  );
};

const styles = StyleSheet.create({
  balanceBlock: {
    width: 250,
    height: 120,
    backgroundColor: '#000000',
    shadowColor: '#000000'
  },

  balancesText: {
    fontFamily: 'JosefinSlab-Regular',
    fontSize: 18,
    color: '#ffffff'
  },

  balancesLoadingText: {
    fontFamily: 'JosefinSlab-Regular',
    fontSize: 15,
    color: '#ffffff',
    marginTop: 5
  }
});

export default AccountBalances;
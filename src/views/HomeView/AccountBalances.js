import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Block from '../components/Block.js';

const AccountBalances = ({ balances }) => {
  const accountBalances = balances && balances.map((balance, index) => (
    <Text key={index} style={styles.balanceBlockSubText}>
      {balance.asset_type === 'native' ? 'XLM' : balance.asset_type}: {Math.abs(balance.balance)}
    </Text>
  ));
  return (
    <Block blockStyles={styles.balanceBlock}>
      <Text style={styles.balanceBlockText}>Balances: </Text>
      {balances && balances.length > 0
        ? accountBalances
        : <Text style={styles.balanceBlockSubText}>Loading account balances...</Text>
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

  balanceBlockText: {
    fontFamily: 'JosefinSlab-Regular',
    fontSize: 20,
    color: '#ffffff'
  },

  balanceBlockSubText: {
    fontFamily: 'JosefinSlab-Regular',
    fontSize: 15,
    color: '#ffffff',
    marginTop: 5
  }
});

export default AccountBalances;
import React, { Component } from 'react';
import { View, StyleSheet,Text, Alert } from 'react-native';
import MenuBlock  from './MenuBlock';
import { screens } from '../enums/screens';

export default class MainScreen extends Component {
  
  render() {
    return (
      <View style={styles.menuContainer}>
        <MenuBlock name='Wallets' onMenuClick={() => this.props.onMenuClick(screens.Wallets)} iconName='suitcase'/>
        <MenuBlock name='Send' onMenuClick={() => this.props.onMenuClick(screens.Send)} iconName='location-arrow'/>
        <MenuBlock name='Assets' onMenuClick={() => this.props.onMenuClick(screens.Assets)} iconName='credit-card'/>
        <MenuBlock name='Trade' onMenuClick={() => this.props.onMenuClick(screens.Trade)} iconName='balance-scale'/>
        <MenuBlock name='News' onMenuClick={() => this.props.onMenuClick(screens.News)} iconName='connectdevelop'/>
        <MenuBlock name='Settings' onMenuClick={() => this.props.onMenuClick(screens.Settings)} iconName='cog'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
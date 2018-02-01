import React, {Component} from 'react';
import { View, StyleSheet,Text, Alert } from 'react-native';
import MenuBlock  from '../components/MenuBlock';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  walletMenuClick   = () => {}
  sendmenuClick     = () => {}
  settingsMenuClick = () => {}
  tradeMenuClick    = () => Alert.alert('Coming Soon..!'); 
  newsMenuClick     = () => {}
  assetsMenuClick   = () => {}
  
  render() {
    return (
      <View style={styles.menuContainer}>
        <MenuBlock name='Wallets' onMenuClick={this.walletMenuClick} iconName='suitcase'/>
        <MenuBlock name='Send' onMenuClick={this.sendmenuClick} iconName='location-arrow'/>
        <MenuBlock name='Assets'onMenuClick={this.assetsMenuClick} iconName='credit-card'/>
        <MenuBlock name='Trade'onMenuClick={this.tradeMenuClick} iconName='balance-scale'/>
        <MenuBlock name='News'onMenuClick={this.newsMenuClick} iconName='connectdevelop'/>
        <MenuBlock name='Settings'onMenuClick={this.settingsMenuClick} iconName='cog'/>
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
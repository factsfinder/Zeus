import React, {Component} from 'react';
import { View, StyleSheet,Text, Alert } from 'react-native';
import MenuBlock  from '../components/MenuBlock';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  walletMenuClick = () => {}
  sendmenuClick = () => {}
  settingsMenuClick = () => {}
  tradeMenuClick = () => { Alert.alert('Coming Soon..!'); }

  render(){
    return (
      <View style={styles.menuContainer}>
        <MenuBlock name='Wallets' onMenuClick={this.walletMenuClick}/>
        <MenuBlock name='Send' onMenuClick={this.sendmenuClick}/>
        <MenuBlock name='Assets'onMenuClick={this.tradeMenuClick}/>
        <MenuBlock name='Trade'onMenuClick={this.settingsMenuClick}/>
        <MenuBlock name='ICOs'onMenuClick={this.settingsMenuClick}/>
        <MenuBlock name='Settings'onMenuClick={this.settingsMenuClick}/>
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
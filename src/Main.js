import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './components/Header';
import MainMenu from './Menus/MainMenu';

import WalletScreen from './screens/walletsScreen/Wallets';
import SendScreen from './screens//SendScreen/Send';
import AssetsScreen from './screens/assetsScreen/Assets';
import TradeScreen from './screens/tradeScreen/Trade';
import NewsScreen from './screens/newsScreen/News';
import SettingsScreen from './screens/settingsScreen/Settings';

class Main extends Component {

  static navigationOptions = {
   header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <MainMenu onMenuClick={(screen) => this.props.navigation.navigate(screen)}/>
      </View>
    );
  }
}

export const HomePage =   StackNavigator({
  Main: {screen: Main},
  Wallets: {screen: WalletScreen},
  Send: {screen: SendScreen},
  Assets: {screen: AssetsScreen},
  Trade: {screen: TradeScreen},
  News: {screen: NewsScreen},
  Settings: {screen: SettingsScreen}
}, {headerMode: 'screen'});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomePage;
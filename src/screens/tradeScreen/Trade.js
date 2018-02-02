import React, {Component} from 'react';
import { View } from 'react-native';
import ComingSoon from '../../components/ComingSoon';

export default class TradeScreen extends Component {
  static navigationOptions = { title: 'Trade XLM' };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ComingSoon infoText='Buy/Sell XLM for other coins..!'/>
      </View>
    );
  }
}
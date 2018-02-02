import React, {Component} from 'react';
import { View } from 'react-native';
import ComingSoon from '../../components/ComingSoon';

export default class AssetsScreen extends Component {
  static navigationOptions = { title: 'Available Assets' };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ComingSoon infoText='Trust assets to trade them against XLM..!'/>
      </View>
    );
  }
}
import React, {Component} from 'react';
import { View } from 'react-native';
import ComingSoon from '../../components/ComingSoon';

export default class NewsScreen extends Component {
  static navigationOptions = { title: 'Stellar News' };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ComingSoon infoText='Know about recent Updates/News/ICOs regarding Stellar...!'/>
      </View>
    );
  }
}
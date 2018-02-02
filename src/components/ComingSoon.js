import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Block from './Block';

const ComingSoon = ({infoText}) => {  
  return (
    <View>
      <Block
        textExists={true}
        blockText='Coming Soon'
        textStyles={styles.blockText}
        blockStyles={styles.block}
      />
      <Text style={styles.infoText}>
        {infoText}
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
  blockText: {
    fontSize: 25,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Josefin',
    color: '#000000',
    marginLeft: 10,
    marginRight: 10
  }
})

export default ComingSoon;
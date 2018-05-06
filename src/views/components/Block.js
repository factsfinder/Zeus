import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';

const Block = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={[styles.block, props.blockStyles]}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  block: {
    elevation: 8,
    borderRadius: 5,
    padding: 20
  }
});

export default Block;
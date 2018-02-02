import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import Block from '../components/Block';

const MenuBlock = ({onMenuClick, name, iconName}) => {
  return (
    <Block
      iconExists={true}
      textExists={true}
      blockIcon={iconName}
      blockText={name}
      onClick={onMenuClick}
      iconStyles={styles.iconStyles}
      textStyles={styles.menuText}
      blockStyles={styles.menuBlock}
    />
  );
}

const styles = StyleSheet.create({
  menuBlock: {
    width: 135,
    height: 135
  },
  menuText: {
    fontSize: 28,
  },
  iconStyles: {
    fontSize: 25,
  }
})

export default MenuBlock;
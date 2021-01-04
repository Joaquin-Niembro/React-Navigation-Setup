import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Basketball from '../screens/Basketball';
import Nba from '../screens/Nba';
//Drawer Navigation
const BasketballStack = () => {
  return (
    <View>
      <Text>BasketballStack</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  CustomDrawerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#ff2255',
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#e1ebf8',
    borderBottomWidth: 0.5,
    padding: 10,
  },
});
export default BasketballStack;

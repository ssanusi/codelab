import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardList from '../Component/CardList';
import { mainColor, primary } from '../lib/constants';

const HomeScreen = ({ navigation }) => (
  <View style={style.container}>
    <View style={style.main}>
      <Text style={style.mainText}>Javascript Developers in lagos</Text>
      <CardList navigation={navigation} />
    </View>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: mainColor,
    flex: 1,
  },
  mainText: {
    color: primary,
    fontSize: 10,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;

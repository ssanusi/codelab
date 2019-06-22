import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from '../Component/Card';

export class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.color}>Code Lab</Text>
        </View>
        <View style={style.main}>
          <Text style={style.mainText}>Javascript Developers lagos</Text>
          <Card />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  header: {
    backgroundColor: '#006064',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  color: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: '#E1E2E1',
    flex: 1,
  },
  mainText: {
    color: '#006064',
    fontSize: 10,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default HomeScreen;

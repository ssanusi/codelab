import React, { Component } from 'react'
import {
  View, Text, StyleSheet, TouchableHighlight,AsyncStorage
} from 'react-native';
import CardList from '../Component/CardList';
import { mainColor, primary } from '../lib/constants';

export default class HomeScreen extends Component {

  constructor(props){
   super(props)
  }

  static navigationOptions = {
    title: 'Welcome to CodeLab!',
  }

  async signOutAsync(){
    try {
      
        await AsyncStorage.removeItem('token')
        this.props.navigation.navigate('Auth');
    } catch ({ message }) {
      alert(message);
    }
  };
  render() {
    return (
      <View style={style.container}>
    <View style={style.main}>
      <View style={style.header}>
        <Text style={style.mainText}>Javascript Developers in lagos</Text>
        <TouchableHighlight onPress={() => this.signOutAsync()}>
          <Text style={style.mainText}>Sign out</Text>
        </TouchableHighlight>
      </View>
      <CardList navigation={this.props.navigation} />
    </View>
  </View>
    )
  }
}

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
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
  },
  header: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    margin : 10,
  },
});
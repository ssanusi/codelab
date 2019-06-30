import React, { Component } from 'react';
import {
  View, ActivityIndicator, StatusBar, AsyncStorage,
} from 'react-native';


export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  async init() {
    const userToken = await AsyncStorage.getItem('token');
    const { navigation } = this.props;
    navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

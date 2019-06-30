import React from 'react';
import {
  View, Text, StyleSheet, TouchableHighlight, Image, AsyncStorage,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import getGithubTokenAsync from '../lib/GetGithubToken';

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    try {
      const token = await getGithubTokenAsync();
      if (token) {
        await AsyncStorage.setItem('token', token);
        navigation.navigate( 'App');
      }
    } catch ({ message }) {
      alert(message);
    }
  };
  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Image style={style.logo} source={require('../../assets/logomoose216.jpg')} />
      </View>
      <View style={style.main}>
        <TouchableHighlight style={style.button} onPress={() => signInAsync()}>
          <View style={style.buttonContainer}>
            <Ionicons name="logo-github" size={50} color="white" />
            <Text style={style.largeText}>Sign In with Github</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#428e92',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: '20%',
    width: '80%',
    backgroundColor: '#00363a',
    borderRadius: 5,
    shadowColor: '#00363a',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  largeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default LoginScreen;

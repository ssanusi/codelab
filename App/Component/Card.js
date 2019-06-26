import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import { secondary } from '../lib/constants';


const Card = ({
  fullName, avatarUrl, username, navigation,
}) => (
  <TouchableOpacity
    style={style.container}
    onPress={() => navigation.navigate('Profile', { username })}
  >
    <View style={style.flexLayout}>
      <Image style={style.thumbnail} source={{ uri: avatarUrl }} />
      <View>
        <Text>{fullName}</Text>
        <View style={style.text}>
          <Text>
            <Image style={style.logo} source={require('../../assets/GitHub-Mark-64px.png')} />
            {' '}
            {username}
          </Text>
        </View>
      </View>
      <View>
        <Image
          style={style.arrowIcon}
          source={require('../../assets/ca96d96471dd4fd694ab44f2d1246918.png')}
        />
      </View>
      <View />
    </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: secondary,
    borderRadius: 6.33,
    width: 331.41,
    height: 83.65,
    marginHorizontal: 18,
    marginTop: 15,
  },
  flexLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thumbnail: {
    height: 60,
    width: 60,
    borderRadius: 25,
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
  logo: {
    height: 12,
    width: 12,
  },
  text: {
    padding: 3,
  },
});

export default Card;

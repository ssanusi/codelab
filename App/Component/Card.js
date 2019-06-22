import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const Card = props => (
  <View style={style.container}>
    <View style={style.flexLayout}>
      <Image
        style={style.thumbnail}
        source={require('../../assets/2362f33e0b8f49bd92733979a17eb21d.png')}
      />
      <View>
        <Text>Sulaiman Sanusi</Text>
        <View>
          <Text>
            <Image style={style.logo} source={require('../../assets/GitHub-Mark-64px.png')} />
            {' '}
            ssanusi
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
  </View>
);

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
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
});

export default Card;

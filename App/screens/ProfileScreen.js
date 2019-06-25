import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExternalLinkAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faExternalLinkAlt);

const ProfileScreen = (props) => {
  const { navigation } = props;
  const USER = navigation.getParam('username');

  const toGitHub = () => {
    const url = `https://github.com/${USER}`;
    Linking.openURL(url);
  };

  const GET_USERS = gql`
  query {
    user(login: ${USER}) {
      name
      bio
      url
      avatarUrl
      login
      repositories {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`;
  return (
    <Query query={GET_USERS}>
      {({ data, loading }) => {
        if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
        const { user } = data;
        return (
          <View style={style.container}>
            <View style={style.thumbnail}>
              <Image style={style.avatar} source={{ uri: user.avatarUrl }} />
            </View>
            <View style={style.main}>
              <View style={style.infoBox}>
                <View style={style.info}>
                  <FontAwesomeIcon icon={faUserCircle} size={18} />
                  <Text style={style.text}>{user.name}</Text>
                </View>
                <View style={style.info}>
                  <FontAwesomeIcon icon={['fab', 'github']} size={20} />
                  <Text style={style.text}>{user.login}</Text>
                </View>
                <View style={style.username} />
              </View>
              <View style={style.repo}>
                <View style={style.repoBox}>
                  <View style={style.circle}>
                    <Text style={style.textCount}>{user.repositories.totalCount}</Text>
                  </View>
                  <Text style={style.largeText}>Repositories</Text>
                </View>
                <View style={style.repoBox}>
                  <View style={style.circle}>
                    <Text style={style.textCount}>{user.starredRepositories.totalCount}</Text>
                  </View>
                  <Text style={style.largeText}>Starred</Text>
                </View>
              </View>

              <View style={style.share}>
                <TouchableOpacity onPress={toGitHub} style={style.shareButton}>
                  <FontAwesomeIcon icon={['fab', 'github']} size={28} color="white" />
                  <Text style={style.largeText}>Goto Github</Text>
                </TouchableOpacity>
                <View style={style.shareButton}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} size={25} color="white" />
                  <Text style={style.largeText}>Share</Text>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    </Query>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    flex: 1,
    backgroundColor: '#005F63',
  },
  main: {
    flex: 1.5,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
  },
  infoBox: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  repo: {
    flex: 2,
    backgroundColor: '#428D90',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  share: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  text: {
    color: '#003539',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 3,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  repoBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textCount: {
    color: '#003539',
  },
  largeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  shareButton: {
    backgroundColor: '#428D90',
    borderRadius: 8,
    height: 50,
    width: 287.75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProfileScreen;

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import client from './lib/apollo-client';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#006064',
        height: 50,
      },
      headerTitleStyle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      headerBackTitleStyle: {
        color: '#ffffff',
        fontSize: 18,
      },
      title: 'CodeLab',
      headerBackTitle: 'back',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>
);

export default App;

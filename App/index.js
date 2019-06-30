import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import client from './lib/apollo-client';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const AppAuthStack = createStackNavigator({
  SignIn: LoginScreen,
});

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});

const AppSwitchStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AppAuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#003539',
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

const AppContainer = createAppContainer(AppSwitchStack);

const App = () => (
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>
);

export default App;

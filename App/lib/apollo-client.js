import { AsyncStorage } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

let token;
const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      token = value;
      return value;
    }
  } catch (error) {
    // Error retrieving data
    return error;
  }
};

getToken();
// create a concatenatable http link for apollo
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

// append a token on each apollo request
const authHttpLink = setContext((_, { headers }) =>
// read token from Cookies

  // send token on each request
  ({
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }));

const httpLinkWithAuthentication = authHttpLink.concat(httpLink);

// create the apollo client
const apolloClient = new ApolloClient({
  link: httpLinkWithAuthentication,
  cache: new InMemoryCache(),
});

export default apolloClient;

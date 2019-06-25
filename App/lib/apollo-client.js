import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { TOKEN } from 'react-native-dotenv';

const token = TOKEN;

// create a concatenatable http link for apollo
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

// append a token on each apollo request
const authHttpLink = setContext((_, { headers }) => {
  // read token from Cookies

  // send token on each request
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

const httpLinkWithAuthentication = authHttpLink.concat(httpLink);

// create the apollo client
const apolloClient = new ApolloClient({
  link: httpLinkWithAuthentication,
  cache: new InMemoryCache(),
});

export default apolloClient;

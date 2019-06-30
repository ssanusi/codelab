import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Card from './Card';

export const GET_USERS = gql`
  query {
    search(query: "location:lagos language:javascript", type: USER, first: 100) {
      edges {
        node {
          ... on User {
            name
            avatarUrl
            login
          }
        }
      }
    }
  }
`;

const CardList = ({ navigation }) => (
  <Query query={GET_USERS}>
    {({ data, loading }) => {
      if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
      const { edges } = data.search;
      return (
        <FlatList
          data={edges}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card
              fullName={item.node.name}
              avatarUrl={item.node.avatarUrl}
              username={item.node.login}
              navigation={navigation}
            />
          )}
        />
      );
    }}
  </Query>
);

export default CardList;

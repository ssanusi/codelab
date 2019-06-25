import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import HomeScreen from '../../App/screens/HomeScreen';
import { GET_USERS } from '../../App/Component/CardList';
import data from '../mockData.json';

it('HomeScreen renders without crashing', async () => {
  const mocks = [
    {
      request: {
        query: GET_USERS,
      },
      result: { data },
    },
  ];
  const renderedHomeScreen = renderer
    .create(
      <MockedProvider mocks={mocks}>
        <HomeScreen />
      </MockedProvider>,
    )
    .toJSON();

  await wait(0);
  expect(renderedHomeScreen).toBeTruthy();
  expect(renderedHomeScreen).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../App/screens/HomeScreen';

it('HomeScreen renders without crashing', () => {
  const renderedHomeScreen = renderer.create(<HomeScreen />).toJSON();
  expect(renderedHomeScreen).toBeTruthy();
  expect(renderedHomeScreen).toMatchSnapshot();
});

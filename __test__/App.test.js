import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App/index';

it('App renders without crashing', () => {
  const renderedApp = renderer.create(<App />).toJSON();
  expect(renderedApp).toBeTruthy();
  expect(renderedApp).toMatchSnapshot();
});

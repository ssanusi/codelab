import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App/index';

it('App renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});

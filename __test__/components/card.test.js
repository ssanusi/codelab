import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../App/Component/Card';

it('Card Component renders without crashing', () => {
  const CardRendered = renderer.create(<Card />).toJSON();
  expect(CardRendered).toBeTruthy();
  expect(CardRendered).toMatchSnapshot();
});

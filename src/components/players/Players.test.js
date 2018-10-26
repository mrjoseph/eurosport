import React from 'react';
import renderer from 'react-test-renderer';
import Players from './Players';
import fetchData from '../../utils/fetchData';
describe('Players', () => {
  it('renders players component ', () => {
    const { data } = fetchData;
    const rendered = renderer.create(
        <Players {...data} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

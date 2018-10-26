import React from 'react';
import renderer from 'react-test-renderer';
import PlayerData from './PlayerData';
describe('PlayerData', () => {
  it('renders wins and losses component ', () => {
    const data = {
      rank: 21,
      points: 1784,
      weight: 81000,
      height: 183,
      age: 33,
      last: [1, 1, 1, 0, 1]
    };

    const rendered = renderer.create(
        <PlayerData {...data} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import WinLosses from './WinLosses';
describe('Wins and Losses', () => {
  it('renders wins and losses component ', () => {
    const score = [1,0,0,0,1];
    const rendered = renderer.create(
        <WinLosses score={score} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

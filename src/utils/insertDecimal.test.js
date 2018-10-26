import insertDecimal from './insertDecimal';

describe('Insert decimal', () => {
  it('should inset a decimal point', () => {
    const str = '185';
    const expected = '1.85';
    expect(insertDecimal(str)).toEqual(expected);
  });

  it('should return undefined if passes letters', () => {
    const str = 'abc';
    const expected = undefined;
    expect(insertDecimal(str)).toEqual(expected);
  });
});

import calculateScore from './calculateScore';

describe('Calculate score', () => {
  it('Should return an array of 2 values', () => {
    const score = [1,0,0,0,1];
    const expected = [2,3];
    expect(calculateScore(score)).toEqual(expected);
  });

  it('Should return null if passed no values', () => {
    const score = [];
    const expected = null;
    expect(calculateScore(score)).toEqual(expected);
  })
});

const calculateScore = (score) => {
  if(!score.length) return null;
  const lossWinLength = score.length;
  const wins = score.reduce((pre, cur) => pre + cur);
  return [wins, lossWinLength - wins];
};

export default calculateScore;

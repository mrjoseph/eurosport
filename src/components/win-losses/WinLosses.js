import React from 'react';
import calculateScore from '../../utils/calculateScore';
import './winlosses.css';

const WinsLosses = ({ score }) => {
  const arr = calculateScore(score);
  return (
      <div className="win-loss">
        <div>Wins: {arr[0]}</div>
        <div>Losses: {arr[1]}</div>
      </div>
  );
};

export default WinsLosses;

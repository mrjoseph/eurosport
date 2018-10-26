import WinLosses from '../win-losses/WinLosses';
import React from 'react';
import insertDecimal from '../../utils/insertDecimal';
import './playerData.css';

const calculateWeight = weight => weight / 1000;

const PlayerData = ({ rank, points, weight, height, age, last }) => {
  return(
      <div className="player-data-container">
        <div className="player-data-row"><span>rank:</span> {rank}</div>
        <div className="player-data-row"><span>points:</span> {points}</div>
        <div className="player-data-row"><span>weight:</span> {`${calculateWeight(weight)} kg`}</div>
        <div className="player-data-row"><span>height:</span> {`${insertDecimal(height)} m`}</div>
        <div className="player-data-row"><span>age:</span> {`${age} years old`}</div>
        <WinLosses score={last} />
      </div>
  );
};

export default PlayerData;

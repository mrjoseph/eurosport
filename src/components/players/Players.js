import React from 'react';
import PlayerData from '../player-data/PlayerData';
import './players.css';

const Image = ({ picture, firstname, lastname }) =>
    <div><img src={picture} alt={`${firstname} ${lastname}`}/></div>;

const Gender = ({ sex }) => {
  if(sex === 'M') {
    return 'Mens'
  }
  return 'Womens';
};

const Players = (data) => {
  const { players } = data;
  return (
      <div className="container">
        {players.map((player) => {
          const {
            firstname,
            lastname,
            shortname,
            sex,
            country,
            picture,
            data,
          } = player;
          return <div className="player" key={player.shortname}>
            <Image
                picture={picture}
                firstname={firstname}
                lastname={lastname}
            />
            <div className="player-stats-container">
              <div className="player-title">
                <img className="flag" src={country.picture} alt={shortname}/>
                <h3>{`${firstname} ${lastname}`}</h3>
              </div>
              <span className="gender"> <Gender sex={sex} /></span>
              <PlayerData {...data} />
            </div>
          </div>
        })}
      </div>
  );
};

export default Players;

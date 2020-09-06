import React from 'react';
import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='PL PLayer'
        height="220"
        width="220"
        src={'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/' + props.player.optaId + '.png'}
        />
        <h2>{props.player.name}</h2>
        <p>{props.player.team}</p>
    </div>
);
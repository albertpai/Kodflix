import React from 'react';

import Sadness from './A_City_of_Sadness.jpg';
import Games from './Games_of_Thrones.jpg';
import House from './House_of_Cards.jpg';
import Robin from './Robin_Hood.jpg';
import Sherlock from './Sherlock.jpg';
import Breaking from './Breaking_Bad.jpg';
import PosterComponent from './Poster_component.js';

export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="poster-container">
                    <PosterComponent posterTitle="A City of Sadness" src={Sadness} alt={Sadness} />
                    <PosterComponent posterTitle="Games of Thrones" src={Games} alt={Games} />
                    <PosterComponent posterTitle="House of Cards" src={House} alt={House} />
                </div>
                <div className="poster-container">
                    <PosterComponent posterTitle="Robin Hood" src={Robin} alt={Robin} />
                    <PosterComponent posterTitle="Sherlock" src={Sherlock} alt={Sherlock} />
                    <PosterComponent posterTitle="Breaking Bad" src={Breaking} alt={Breaking} />
                </div>
            </div>
        )
    }
};
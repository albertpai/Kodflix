import React from 'react';

import Sadness from './A_City_of_Sadness.jpg';
import Games from './Games_of_Thrones.jpg';
import House from './House_of_Cards.jpg';
import Robin from './Robin_Hood.jpg';
import Sherlock from './Sherlock.jpg';
import Breaking from './Breaking_Bad.jpg';

import Poster from './Poster_component.js';

export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="gallery-container">
                    <Poster posterTitle="A City of Sadness"
                        src={Sadness} alt={Sadness} id="a-city-of-sadness" />
                    <Poster posterTitle="Games of Thrones"
                        src={Games} alt={Games} id="games-of-thrones" />
                    <Poster posterTitle="House of Cards"
                        src={House} alt={House} id="house-of-cards" />
                    <Poster posterTitle="Robin Hood"
                        src={Robin} alt={Robin} id="robin-hood" />
                    <Poster posterTitle="Sherlock"
                        src={Sherlock} alt={Sherlock} id="sherlock" />
                    <Poster posterTitle="Breaking Bad"
                        src={Breaking} alt={Breaking} id="breaking-bad" />
                </div>
            </div>
        )
    }
};
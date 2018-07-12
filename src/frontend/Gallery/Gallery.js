import React from 'react';
import Poster from '../Poster/Poster.js';
import galleryGet from './gallery-get.js';
import './Gallery.css';

export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="gallery-container">
                    {galleryGet.map((show, index) => 
                    <Poster title={show.title} src={show.src} alt={show.alt} id={show.id} key={index} />)}
                </div>
            </div>
        )
    }
};
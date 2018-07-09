import React from 'react';
import './Gallery.css';

import Poster from '../Poster/Poster.js';
import galleryGet from './gallery-get.js';

export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="gallery-container">
                    {galleryGet.map((show) => <Poster title={show.title} src={show.src} alt={show.alt} id={show.id} />)}
                </div>
            </div>
        )
    }
};
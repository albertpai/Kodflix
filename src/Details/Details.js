import React from 'react';
import './Details.css';
import galleryGet from '../Gallery/gallery-get.js';

export default class Details extends React.Component {

    render() {
        let selectedShow = galleryGet.find ((galleryGet) => {
            return galleryGet.id === this.props.match.params.id
        });

        let showTitle = selectedShow.title;

        return (
            <div>
                <h2>
                    {showTitle}
                </h2>
            </div>
        )
    

    }
};
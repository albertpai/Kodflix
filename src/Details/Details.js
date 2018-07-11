import React from 'react';
import './Details.css';
import galleryGet from '../Gallery/gallery-get.js';
import { Redirect } from 'react-router';
import NotFound from '../NotFound/NotFound.js';

export default class Details extends React.Component {

    render() {

        let urlId = this.props.match.params.id;

        let selectedShow = galleryGet.find((galleryGet) => {
            return galleryGet.id === urlId
        });

        if (selectedShow === undefined) {
            return (
                <Redirect to="/not-found" component={NotFound} />
            )
        }

        let showTitle = selectedShow.title;

        let showSynopsis = selectedShow.synopsis;

        return (
            <div>
                <div>
                    <h1>
                        {showTitle}
                    </h1>
                </div>
                <div className="details-container">
                    <div className="details-item">
                        <p>
                            {showSynopsis}
                        </p>
                    </div>
                    <div className="details-item">
                        <img src={selectedShow.src} alt={selectedShow.alt} />
                    </div>
                </div>
            </div>
        )
    }
};
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

        return (
            <div>
                <h2>
                    {showTitle}
                </h2>
            </div>
        )
    }
};
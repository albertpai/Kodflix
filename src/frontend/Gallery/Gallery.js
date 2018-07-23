import React from 'react';
import Poster from './Poster/Poster.js';
import './Gallery.css';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showGallery: []
        }
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(res => res.json())
            .then(showGallery => {
                this.setState({ showGallery })
            })
    }

    render() {
        return (
            <div>
                <div className="gallery-container">
                    {this.state.showGallery.map((show) =>
                        <Poster title={show.title} src={show.src} alt={show.alt} id={show.id} key={show.id} />)}
                </div>
            </div>
        )
    }
};
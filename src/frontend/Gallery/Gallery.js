import React from 'react';
import Poster from './Poster/Poster.js';
import Loading from '../common/Loading.js';
import './Gallery.css';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showGallery: [] };
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(res => res.json())
            .then(showGallery => this.setState({ showGallery }));
    }

    render() {
        let showGallery = this.state.showGallery;
        if (showGallery.length) {
            return (
                <div>
                    <div className="gallery-container">
                        {showGallery.map(show => (
                            <Poster id={show.id} title={show.title}
                                alt={show.alt} key={show.id}
                            />
                        ))}
                    </div>
                </div>
            )
        }
        else {
            return (
                <Loading />
            )
        }
    }
}

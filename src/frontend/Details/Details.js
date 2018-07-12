import React from 'react';
import { Redirect } from 'react-router';
import galleryGet from '../Gallery/gallery-get.js';
import NotFound from '../NotFound/NotFound.js';
import './Details.css';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showKey: {}
        }
    }

    componentDidMount() {
        let urlId = this.props.match.params.id;
        let showValue = galleryGet.find((select) => {
            return select.id === urlId
        })
        this.setState({
            showKey: showValue
        })
        window.scrollTo(0, 0)
    }

    render() {
        let selectedShow = this.state.showKey
        let showTitle = selectedShow.title;
        let showSynopsis = selectedShow.synopsis;
        if (selectedShow === undefined) {
            return (
                <Redirect to="/not-found" component={NotFound} />
            )
        }
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
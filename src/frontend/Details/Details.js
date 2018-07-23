import React from 'react';
import { Redirect } from 'react-router';
import NotFound from '../NotFound/NotFound.js';
import Loading from '../common/Loading.js';
import './Details.css';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showDetails: {} }
    }

    componentDidMount() {
        fetch('rest/shows')
            .then(res => res.json())
            .then(shows => {
                let urlId = this.props.match.params.id;
                let showDetails = shows.find(select => select.id === urlId)
                this.setState({ showDetails })
                window.scrollTo(0, 0)
            })
    }

    render() {
        let showDetails = this.state.showDetails;
        if (showDetails === undefined) {
            return (
                <Redirect to="/not-found" component={NotFound} />
            )
        }
        else if (showDetails.id) {
            return (
                <DetailsContent show={showDetails} />
            )
        }
        else {
            return (
                <Loading />
            )
        }
    }
}

function DetailsContent({ show }) {
    let showTitle = show.title;
    let showSynopsis = show.synopsis;
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
                    <img src={require(`../common/image/${show.id}.jpg`)} alt={show.alt} />
                </div>
            </div>
        </div>
    )
}
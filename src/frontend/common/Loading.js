import React from 'react';
import './Loading.css';

export default function Loading() {
    return (
        <div className="loading-container">
            <div>
                <h1>Loading...</h1>
                <div className="loader" />
            </div>
        </div>
    );
}

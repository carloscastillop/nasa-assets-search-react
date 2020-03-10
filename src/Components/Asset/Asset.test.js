import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Asset from './Asset';
import {
    BrowserRouter as Router,
} from "react-router-dom";


/**
 * Basic render
 */
it('Asset renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <Asset/>
        </Router>, div);
});
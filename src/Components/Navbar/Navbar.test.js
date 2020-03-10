import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './Navbar';


/**
 * Basic render
 */
it('Navbar renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <Navbar/>
        </Router>, div);
});
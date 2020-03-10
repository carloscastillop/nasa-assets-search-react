import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Footer from './Footer';


/**
 * Basic render
 */
it('Footer renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <Footer/>
        </Router>, div);
});

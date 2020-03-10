import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Header from './Header';
import Footer from "../Footer/Footer.test";


/**
 * Basic render
 */
it('Header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <Header/>
        </Router>, div);
});
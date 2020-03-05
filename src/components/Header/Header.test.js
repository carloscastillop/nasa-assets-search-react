import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Header from './Header';


/**
 * Basic render
 */
it('Header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header/>, div);
});
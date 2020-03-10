import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Result from './Result';


/**
 * Basic render
 */
it('Result renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Result/>, div);
});
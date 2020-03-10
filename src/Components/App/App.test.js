import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import App from './App';


/**
 * Basic render
 */
it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

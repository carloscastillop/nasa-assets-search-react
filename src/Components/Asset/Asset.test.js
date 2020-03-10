import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Asset from './Asset';


/**
 * Basic render
 */
it('Asset renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Asset/>, div);
});
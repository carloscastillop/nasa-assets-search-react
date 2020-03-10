import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Image from './Image';


/**
 * Basic render
 */
it('Image renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image/>, div);
});
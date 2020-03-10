import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Video from './Video';


/**
 * Basic render
 */
it('Video renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Video/>, div);
});
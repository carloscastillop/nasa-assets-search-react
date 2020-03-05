import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Results from './Results';


/**
 * Basic render
 */
it('Results renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Results/>, div);
});
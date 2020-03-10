import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';


/**
 * Basic render
 */
it('Checkbox renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox/>, div);
});

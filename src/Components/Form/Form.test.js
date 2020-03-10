import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Form from './Form';


/**
 * Basic render
 */
it('Form renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form/>, div);
});
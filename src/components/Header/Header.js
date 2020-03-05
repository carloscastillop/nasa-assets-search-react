import React from 'react';
import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form';

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header>
                    <Navbar/>
                    <Form/>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;

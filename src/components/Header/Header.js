import React from 'react';
import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form';

import './Header.scss';

class Header extends React.Component {

    render() {
        const {search, handleChange} = this.props
        return (
            <React.Fragment>
                <header className="fullHeight spaceEffect">
                    <div className='stars'></div>
                    <div className='twinkling'></div>
                    <div className='clouds'></div>
                    <Navbar/>
                    <Form search={search} handleChange={handleChange}/>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;

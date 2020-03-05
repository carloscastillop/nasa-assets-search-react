import React from 'react';
import './Navbar.scss';
import '../../Styles/animate.css';
import logo from '../../Images/nasa-logo.svg';

function NavBar() {
    return (
        <nav className="navbar pt-4 mb-5">
            <div className="container text-center">
                <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="Nasa Logo"
                        className="animated fadeInUp delay-1s"
                    />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
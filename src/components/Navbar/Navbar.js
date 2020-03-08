import React from 'react';
import './Navbar.scss';
import '../../Styles/animate.css';
import logo from '../../Images/nasa-logo.svg';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar pt-4 mb-3">
            <div className="container text-center">
                <Link className="navbar-brand" to="/">
                    <img
                        src={logo}
                        alt="Nasa Logo"
                        className="animated fadeInUp delay-1s"
                    />
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
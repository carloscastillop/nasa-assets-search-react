import React from 'react';
import {Link} from "react-router-dom";
import './Footer.scss';
import logo from '../../Images/nasa-logo.svg';

function Footer() {

    return (
        <React.Fragment>

            <footer>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-auto">

                            <Link className="navbar-brand" to="/">
                                <img
                                    src={logo}
                                    alt="Nasa Logo"
                                    className="animated fadeInUp delay-1s"
                                />
                            </Link>

                        </div>
                        <div className="col">
                            <p className="text-right m-0 text-muted small pt-1">images.nasa.gov API - 2020</p>
                        </div>
                    </div>
                </div>
            </footer>

        </React.Fragment>
    );
}

export default Footer;
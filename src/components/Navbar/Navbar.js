import React from 'react';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
                        alt="Nasa Logo"
                    />
                </a>
            </div>
        </nav>
    );
}
export default NavBar;
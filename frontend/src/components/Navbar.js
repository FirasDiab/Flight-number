import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><i className="fas fa-plane-departure"></i> Flight Status </a>
            </nav>
        </div>
    )
}

export default Navbar;

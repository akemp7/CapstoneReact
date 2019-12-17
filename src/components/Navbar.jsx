import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    var bar={
        width: '100%',
        backgroundColor: '#D79922'
    };

    var navText={
        textDecoration: 'none',
        padding: '10px',
        fontWeight:'900',
        marginLeft: '20vmax', 
        color: '#303030'
    }
    return (
        <div style={bar}>
            <div className="header">
                <nav>
                    <Link to="/" style={navText}>Home</Link>
                    <Link to="/contribute" style={navText}>Contribute</Link>
                    <Link to="/contributions" style={navText}>For Researchers</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
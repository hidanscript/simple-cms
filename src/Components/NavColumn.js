import React from 'react';
import { Link } from 'react-router-dom';
import './css/NavColumn.css';

function NavColumn() {
    return(
        <nav className="nav-column">
            <Link className="links" to="/">
                <div className="btn-nav">
                    <i className="fas fa-home"></i>
                </div>
            </Link>
            <Link className="links" to="/add">
                <div className="btn-nav">
                    <i className="fas fa-plus-circle"></i>
                </div>
            </Link>
            <Link className="links" to="/albums">
                <div className="btn-nav">
                    <i className="fas fa-camera-retro"></i>
                </div>
            </Link>
            <div className="btn-nav">
                <i className="fas fa-trash"></i>
            </div>
            <div className="btn-nav">
                <i className="fas fa-chart-pie"></i>
            </div>
            <div className="btn-nav">
                <i className="fas fa-cog"></i>
            </div>
        </nav>
    );
}

export default NavColumn;
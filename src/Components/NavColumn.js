import React from 'react';
import './css/NavColumn.css';

function NavColumn() {
    return(
        <nav className="nav-column">
            <div className="btn-nav">
                <i className="fas fa-home"></i>
            </div>
            <div className="btn-nav">
                <i className="fas fa-plus-circle"></i>
            </div>
            <div className="btn-nav">
                <i className="fas fa-trash"></i>
            </div>
            <div className="btn-nav btn-notification inactive">
                <i className="fas fa-bell"></i>
            </div>
        </nav>
    );
}

export default NavColumn;
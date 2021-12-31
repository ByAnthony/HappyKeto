import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
        <div className="header">
            <div className="logo">
                <ul>
                    <li><Link to="/">Happy Keto</Link></li>
                </ul>
            </div>
            <div className="menu">
                <ul>
                    <li id="menu-link-new"><Link to="/recipes">Your Recipes</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
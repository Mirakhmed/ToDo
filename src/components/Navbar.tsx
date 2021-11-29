import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper grey darken-4 px1">
            <a href="/" className="brand-logo">MyFXTM</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/about">Accounts</NavLink></li>
            </ul>
        </div>
    </nav>
)
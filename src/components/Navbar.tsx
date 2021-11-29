import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper grey darken-4 px1">
            <a href="/" className="brand-logo">ToDo App</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    </nav>
)
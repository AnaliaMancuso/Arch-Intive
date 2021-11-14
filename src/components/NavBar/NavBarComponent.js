import React from "react";
import logo from '../../assets/logo.svg';
import navbar from './navbar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <>
        <div className="navBar-container full-nav">
            <div className="navBar-logo">
            <Link to="/home">
                <img src={logo}/>
            </Link>
            </div>
            <nav className="navBar-menu">
                <ul className="navBar-list">
                    <li className="navBar-item">
                        <Link to="/portfolio">portfolio</Link>
                    </li>
                    <li className="navBar-item">
                        <Link to="/aboutus">about us</Link>
                    </li>
                    <li className="navBar-item">
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="aside-menu">
            <div className="navBar-logo">
                <Link to="/home">
                    <img src={logo}/>
                </Link>
            </div>
            <input type="checkbox" id="aside-menu"></input>
            <label for="aside-menu">
                <span><i class="fas fa-bars"></i></span>
            </label>
            <nav>
                <ul className="navBar-list">
                    <li className="navBar-item">
                        <Link to="/portfolio">portfolio</Link>
                    </li>
                    <li className="navBar-item">
                        <Link to="/aboutus">about us</Link>
                    </li>
                    <li className="navBar-item">
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
    )
}
export default NavBar;
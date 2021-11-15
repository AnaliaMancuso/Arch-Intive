import React from "react";
import logo from '../../assets/logo-white.svg'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import footer from './footer.css';
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
    <div className="footer-container">
        <div className="footer__left">
            <div className="footer-logo">
                <Link to="/home">
                    <img src={logo}/>
                </Link>
            </div>
            <div className="footer-menu">
                <ul className="footer-list">
                    <li className="footer-item">
                        <Link to="/portfolio">portfolio</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/aboutus">about us</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="button-footer__container">
            <Link to="/portfolio">
                <ButtonComponent content="see our portfolio"/> 
            </Link>   
        </div>
    </div>
    )
}
export default FooterComponent;
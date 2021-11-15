import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
import hero from './hero.css';

const HeroComponent = () => {
    return (
    <div className="hero-container">
        <div className="hero-text">
            <h3>project paramour</h3>
            <p>Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
            <Link to="/portfolio">
                <ButtonComponent content="see our portfolio"/>
            </Link>
        </div>
    </div>
    )
}
export default HeroComponent;
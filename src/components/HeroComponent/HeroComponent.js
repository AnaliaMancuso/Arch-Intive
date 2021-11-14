import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import hero from './hero.css';
const HeroComponent = () => {
    return (
    <div className="hero-container">
        <div className="hero-text">
            <h3>project paramour</h3>
            <p>Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
            <ButtonComponent/>
        </div>
    </div>
    )
}
export default HeroComponent;
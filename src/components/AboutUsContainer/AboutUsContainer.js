import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import about from './aboutus.css';

const AboutUsContainer = () => {
    return (
    <div className="aboutUs-container">
        <h3>Small team, big ideas</h3>
        <Link to="/aboutus">
            <ButtonComponent content="about us"/>
        </Link>
    </div>
    )
}
export default AboutUsContainer;
import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
import featured from './featured.css';

const FeaturedComponent = () => {
    return (
    <div className="featured-container">
        <h3>Featured</h3>
        <Link to="/portfolio" >
            <ButtonComponent content="see all"/>
        </Link>
    </div>
    )
}
export default FeaturedComponent;
import React from "react";
// import dataPortfolio from '../../data/portfolio.json';

const TitleCard = ({title}) => {
    //prop con 3 titulos
    return (
    <div className="titleCard">
        <h3>{title}</h3>
    </div>
    )
}
export default TitleCard;
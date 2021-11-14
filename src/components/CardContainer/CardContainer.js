import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import dataPortfolio from '../../data/portfolio.json';
import style from './cardContainer.css';

const CardContainer = () => {
    return (
        <div className="card-container">
        {dataPortfolio.map((index)=> {  
            if (index.proyect.id <4) { 
            return (
                <CardComponent 
                    className={'card-component ' + index.proyect.imageClass}
                    number={index.proyect.id}
                    title={index.proyect.title}
                    date={index.proyect.date}
                />
            )
            }
        })}
        </div>
    )
    
}
export default CardContainer;
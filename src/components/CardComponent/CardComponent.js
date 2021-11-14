import React from "react";
import NumberCard from "../NumberCard/NumberCard";
import TitleCard from "../TitleCard/TitleCard";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import style from './cardComponent.css';

const CardComponent = ({ className, number, title, date }) => {
    //prop con numero 1 2 y 3
    return (
    <div className={className}>
        <div>
            <NumberCard number={number}/> 
        </div>
        <div>
            <TitleCard title={title}/> 
            <DescriptionCard date={date}/>  
        </div>
    </div>
    )
}
export default CardComponent;


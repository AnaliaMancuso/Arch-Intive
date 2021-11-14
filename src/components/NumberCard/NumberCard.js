import React from "react";


const NumberCard = ({number}) => {
    //prop con numero 1 2 y 3
    return (
    <div className="numberCard">
        <h2>{number}</h2>
    </div>
    )
}
export default NumberCard;
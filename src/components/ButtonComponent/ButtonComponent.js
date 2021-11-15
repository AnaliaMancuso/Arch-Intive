import React from "react";
import style from './button.css';

const ButtonComponent = ({content}) => {
    return (
    <div className="button">
        <button>
            {content}
            <svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"  stroke-width="2"><path d="M15 1l9 9-9 9M0 10h24"/></g></svg>
        </button>
    </div>
    )
}
export default ButtonComponent;
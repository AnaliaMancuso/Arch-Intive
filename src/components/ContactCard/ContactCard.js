import contact_card from './contact-card.css';
import { useState, useEffect } from 'react';

const ContactCard = ({title, mail, adress, phone, map}) => {
   
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        if (clicked) {
        window.location.assign(map);
        }
    });
       
    return (
        <div className="contact-card__container">
            <h4>{title}</h4>
            <p>Mail: {mail}</p>
            <p>Adress: {adress}</p>
            <p>Phone: {phone}</p>
            <h5 onClick={() => setClicked(true)}>View on map:     
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fill-rule="evenodd"  stroke-width="2"><path d="M15 1l9 9-9 9M0 10h24"/></g></svg>
            </h5>
        </div>
    )
}
export default ContactCard;
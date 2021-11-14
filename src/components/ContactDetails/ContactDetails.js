import dataContact from '../../data/contact.json';
import ContactCard from '../ContactCard/ContactCard';
import details from './details.css';

const ContactDetails = () => {
    return (
        <div className="details__container">
            <div>
                <h3>contact details</h3>
            </div>
            {dataContact.map((index)=> {
            return (
            <div>
                <ContactCard
                    title={index.contact.title}
                    mail={index.contact.mail}
                    adress={index.contact.adress}
                    phone={index.contact.phone}
                    map={index.contact.maps}
                />
            </div>
            )})}
        </div>
    )
}
export default ContactDetails;

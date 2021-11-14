import PresentationComponent from "../PresentationComponent/PresentationComponent";
import telephone from '../../assets/contact/desktop/image-hero.jpg'
import ContactDetails from "../ContactDetails/ContactDetails";
import MapComponent from "../MapComponent/MapComponent";
import FormComponent from "../FormComponent/FormComponent";

const ContactContainer = () => {

    return (
        <>
            <PresentationComponent 
                image={telephone}
                title="contact"
                subTitle="Tell us about your project"
                text="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!" 
            />
            <ContactDetails/>
            <MapComponent/>
            <FormComponent/>
        </>
    )
}

export default ContactContainer;
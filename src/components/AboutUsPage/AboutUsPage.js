import PresentationComponent from "../PresentationComponent/PresentationComponent";
import computer from '../../assets/about/desktop/image-hero.jpg'
import HeritageComponent from "../HeritageComponent/HeritageComponent";
import LeaderContainer from "../LeaderContainer/LeaderContainer";

const AboutUsPage = () => {
    return (
        <div className="aboutUs-container-page">
            <PresentationComponent
                image={computer}
                title="about"
                subTitle="Your team of professionals"
                text="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings." 
            />
            <HeritageComponent/>
            <LeaderContainer/>
        </div>
    )
};
export default AboutUsPage;
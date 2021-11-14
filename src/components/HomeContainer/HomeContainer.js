import HeroComponent from '../HeroComponent/HeroComponent';
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';
import AboutUsContainer from '../AboutUsContainer/AboutUsContainer';
import FeaturedComponent from '../FeaturedComponent/FeaturedComponent';
import CardContainer from '../CardContainer/CardContainer';


const HomeContainer = () => {
    return (
        <>
            <HeroComponent/>
            <WelcomeComponent/>
            <AboutUsContainer/>
            <FeaturedComponent/>
            <CardContainer/>
        </>
    )
};
export default HomeContainer;
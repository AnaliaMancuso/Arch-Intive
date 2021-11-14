import heritage from '../../assets/about/desktop/image-heritage.jpg'
import heritageStyle from './heritage.css';

const HeritageComponent = () => {
    return (
        <div className="heritage__container">
            <div className="heritage__text">
                <h3>
                Our Heritage
                </h3>
                <p>
                    Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
                    Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.
                    Our small team of world-class professionals provides input on every project.
                </p>
            </div>
            <div>
                <img src={heritage}></img>
            </div>
        </div>
    )
}
export default HeritageComponent;
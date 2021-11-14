import presentation from './presentation.css';

const PresentationComponent = ({image, title, subTitle, text}) => {
    return (
        <div className="presentation__container">
            <div className="presentation__img">
                <img src={image} ></img>
            </div>
            <div className="presentation__text">
                <h2>{title}</h2>
                <h3>{subTitle} </h3>
                <p> {text} </p>
            </div>
        </div>
    )
}

export default PresentationComponent;
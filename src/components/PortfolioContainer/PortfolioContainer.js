import CardComponent from "../CardComponent/CardComponent"
import dataPortfolio from '../../data/portfolio.json';
import style from './portfolio.css';

const PortfolioContainer = () => {
    return (
        <div className="card-container">
        {dataPortfolio.map((index)=> {
            return (
                <CardComponent 
                    className={'card-component ' + index.proyect.imageClass}
                    title={index.proyect.title}
                    date={index.proyect.date}
                />
            )
        })}
        </div>
    )
}
export default PortfolioContainer;
import dataLeaders from '../../data/leaders.json';
import LeaderCard from '../LeaderCard/LeaderCard';
import leaders from './leaders.css';

const LeaderContainer = () => {
    return (
        <div className="leaders__container">
            <div className="leaders__title">
                <h3>the leaders</h3>
            </div>
            <div className="leaders__cards">
                {dataLeaders.map((index)=> {
                return (
                    <LeaderCard
                        img={index.leader.picture} 
                        role={index.leader.role} 
                        name={index.leader.name} 
                    />
                )
            })}
            </div>
        </div>
    )

}
export default LeaderContainer;
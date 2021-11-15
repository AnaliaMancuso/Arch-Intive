import twitter from '../../assets/twitter_icon.png';
import instagram from '../../assets/instagram_icon.png';
import style from './leaderCard.css';

const LeaderCard = ({img, role, name}) => {
    return (
        <div className="leader-card">
            <div className={'card-leader-img ' + img}></div>
            <h3>{name}</h3>
            <h4>{role}</h4>
            <img src={twitter}></img>
            <img src={instagram}></img>
        </div>
    )
}
export default LeaderCard;
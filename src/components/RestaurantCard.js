import { IMG1_URL } from "../commons/constant";
import { resdata } from "../commons/resdata";

const RestaurantCard = (props) => {
     const { resdata } = props;
    const { name, cuisines, rating, delivery_time } = resdata;

    return (
        <div className="res-card">
            <h2>{name}</h2>
            <img className="image1" src={IMG1_URL} />
            <h3>{cuisines}</h3>
            <h3>
                {rating}
                <sup>*</sup>
            </h3>
            <h3>{delivery_time}</h3>
        </div>
    );
};

export default RestaurantCard;

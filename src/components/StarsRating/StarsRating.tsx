import React, {FC} from 'react';
import StarRatings from "react-star-ratings";

interface IProps{
    vote_average: number
    color: string
    size: string
}

const StarsRatingComponent: FC<IProps> = ({vote_average, color, size}) => {
    return (
        <div>
            <StarRatings
                rating={vote_average}
                starRatedColor={color}
                starEmptyColor="lightgray"
                starDimension={size}
                starSpacing="2px"
                numberOfStars={10}
            />
        </div>
    );
};

export default StarsRatingComponent;
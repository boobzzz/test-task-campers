import css from './ReviewsPage.module.css';
import ReviewItem from "../../components/ReviewItem/ReviewItem.jsx";

import details from '../../camper.json';

export default function ReviewsPage() {

    return (
        <ul className={css.container}>
            {details.reviews.map((review) => (
                <li>
                    <ReviewItem review={review} />
                </li>
            ))}
        </ul>
    );
}
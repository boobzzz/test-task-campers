import { useSelector } from 'react-redux';
import ReviewItem from '../../components/ReviewItem/ReviewItem.jsx';
import css from './ReviewsPage.module.css';

import BookForm from '../../components/BookForm/BookForm.jsx';

export default function ReviewsPage() {
    const { details } = useSelector(state => state.campers);

    return (
        <>
            <ul className={css.container}>
                {details.reviews.map((review) => (
                    <li>
                        <ReviewItem review={review} />
                    </li>
                ))}
            </ul>
            <BookForm />
        </>
    );
}
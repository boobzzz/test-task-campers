import css from './ReviewItem.module.css';
import PropTypes from "prop-types";
import icons from "../../assets/img/icons.svg";

export default function ReviewItem({ review }) {
    return (
        <div className={css.container}>
            <div className={css.header}>
                <div className={css.avatar}>
                    <span>
                        {review.reviewer_name.split('')[0]}
                    </span>
                </div>
                <div className={css.name}>
                    <p>{review.reviewer_name}</p>
                    {Array.from({length: 5}).map((n, i) => (
                        <svg key={i} width="16" height="16">
                            <use href={`${icons}${i >= review.reviewer_rating
                                ? '#icon-star-gray'
                                : '#icon-star-gold'}`}
                            ></use>
                        </svg>
                    ))}
                </div>
            </div>
            <p className={css.comment}>
                {review.comment}
            </p>
        </div>
    );
}

ReviewItem.propTypes = {
    review: PropTypes.shape({
        reviewer_name: PropTypes.string,
        reviewer_rating: PropTypes.number,
        comment: PropTypes.string,
    }).isRequired
};

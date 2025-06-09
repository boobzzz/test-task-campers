import RegularButton from '../Button/RegularButton.jsx';
import FormatedPrice from '../FormatedPrice/FormatedPrice.jsx';
import CategoryList from "../CategoryList/CategoryList.jsx";
import css from './CatalogItem.module.css';
import PropTypes from 'prop-types';

import icons from '../../assets/img/icons.svg';
import { CATEGORIES } from '../../utils/constants.js';

export default function CatalogItem({ details }) {
    const getFavIcon = (isInFavourites) => {
        return isInFavourites ? `${icons}#icon-heart-red` : `${icons}#icon-heart-black`;
    };

    const getCategories = () => {
        return CATEGORIES
            .filter((category) => details[category.name])
            .map((category) => {
                return {
                    id: category.id,
                    name: typeof details[category.name] === 'string' ? details[category.name] : category.name,
                    icon: category.icon,
                }
            });
    }

    return (
        <div className={css.container}>
            <div className={css.image}>
                <img src={details.gallery[0].thumb} alt="camper image"/>
            </div>
            <div className={css.details}>
                <div className={css.header}>
                    <div className={css.mainHeader}>
                        <h2>{details.name}</h2>
                        <div className={css.price}>
                            <p><FormatedPrice value={details.price} /></p>
                            <svg width="24" height="24">
                                <use href={getFavIcon(false)}></use>
                            </svg>
                        </div>
                    </div>
                    <div className={css.subHeader}>
                        <div className={css.rating}>
                            <svg width="16" height="16">
                                <use href={`${icons}#icon-star-gold`}></use>
                            </svg>
                            <p>{`${details.rating}(${details.reviews.length} Reviews)`}</p>
                        </div>
                        <div className={css.location}>
                            <svg width="16" height="16">
                                <use href={`${icons}#icon-map-black`}></use>
                            </svg>
                            <p>{`${details.location}`}</p>
                        </div>
                    </div>
                </div>
                <div className={css.desc}>
                    {details.description}
                </div>
                <CategoryList categories={getCategories()} />
                <RegularButton>
                    Show more
                </RegularButton>
            </div>
        </div>
    );
}

CatalogItem.propTypes = {
    details: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        reviews: PropTypes.array.isRequired,
        description: PropTypes.string.isRequired,
        gallery: PropTypes.arrayOf(PropTypes.shape({
            thumb: PropTypes.string,
            original: PropTypes.string
        })).isRequired,
    }).isRequired
};

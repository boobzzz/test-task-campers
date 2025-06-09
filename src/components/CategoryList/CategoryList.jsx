import css from './CategoryList.module.css';
import PropTypes from 'prop-types';

import icons from '../../assets/img/icons.svg';

export default function CategoryList({ categories }) {
    return (
        <ul className={css.container}>
            {categories.map((category) => (
                <li
                    key={category.id}
                    className={css.item}
                >
                    <svg width="20" height="20">
                        <use href={`${icons}${category.icon}`}></use>
                    </svg>
                    <p>{category.name}</p>
                </li>
            ))}
        </ul>
    );
}

CategoryList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    })).isRequired,
};

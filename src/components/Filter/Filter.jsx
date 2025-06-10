import css from './Filter.module.css';
import PropTypes from 'prop-types';

import icons from '../../assets/img/icons.svg';
import { FILTER_TYPES } from '../../utils/constants.js';

export default function Filter({ title, type, params, onChange }) {
    const handleChange = (e) => {
        onChange({
            id: e.target.id,
            key: e.target.name
        });
    };

    return (
        <div>
            <h3 className={css.title}>
                {title}
            </h3>
            <ul className={css.filterList}>
                {params.map((param) => (
                    <li key={param.id} className={css.filterItem}>
                        <input
                            type={type}
                            id={param.id}
                            name={param.key}
                            onChange={handleChange}
                        />
                        <label htmlFor={param.id}>
                            <svg width="32" height="32">
                                <use href={`${icons}${param.icon}`}></use>
                            </svg>
                            <span>{param.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([FILTER_TYPES.CHECKBOX, FILTER_TYPES.RADIO]).isRequired,
    params: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    })).isRequired,
    onChange: PropTypes.func.isRequired,
};

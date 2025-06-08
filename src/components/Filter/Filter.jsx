import css from './Filter.module.css';
import PropTypes from 'prop-types';

import icons from '../../assets/img/icons.svg';
import { FILTER_TYPES } from '../../utils/constants.js';

export default function Filter({ title, params, type, onChange }) {
    const handleChange = (e) => {
        onChange({
            id: e.target.id,
            type: type,
            status: e.target.checked
        });
    };

    return (
        <div className={css.container}>
            <h3 className={css.title}>
                {title}
            </h3>
            <form className={css.filterList} id={title} onSubmit={handleChange}>
                {params.map((param) => (
                    <div key={param.id} className={css.filterItem}>
                        <input
                            type={type === FILTER_TYPES.MANY_OF_MANY ? "checkbox" : "radio"}
                            id={param.id}
                            name={title}
                            onChange={handleChange}
                        />
                        <label htmlFor={param.id}>
                            <svg width="32" height="32">
                                <use href={`${icons}${param.icon}`}></use>
                            </svg>
                            <span>{param.name}</span>
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
}

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    params: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    })).isRequired,
    type: PropTypes.oneOf([FILTER_TYPES.ONE_OF_MANY, FILTER_TYPES.MANY_OF_MANY]).isRequired,
    onChange: PropTypes.func.isRequired,
};

import css from './LocationFilter.module.css';
import PropTypes from 'prop-types';

import { CITIES } from '../../utils/constants.js';
import icons from '../../assets/img/icons.svg';

const SELECT_ALL = 'Select all';

export default function LocationFilter({ getLocation }) {
    const changeHandler = (e) => {
        getLocation(e.target.value === SELECT_ALL ? '' : e.target.value);
    }

    return (
        <div className={css.container}>
            <svg className={css.icon} width="20" height="20">
                <use href={`${icons}#icon-map-black`}></use>
            </svg>
            <select
                className={css.select}
                onChange={changeHandler}
            >
                <option>{SELECT_ALL}</option>
                {CITIES.map((city) => (
                    <option key={city.id} value={`Ukraine, ${city.name}`}>
                        {`Ukraine, ${city.name}`}
                    </option>
                ))}
            </select>
        </div>
    );
}

LocationFilter.propTypes = {
    getLocation: PropTypes.func.isRequired
};

import css from './RegularButton.module.css';
import PropTypes from 'prop-types';

export default function RegularButton({ type, clickHandler, children }) {
    return (
        <button
            type={type}
            className={css.container}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}

RegularButton.propTypes = {
    type: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
    children: PropTypes.node.isRequired,
};

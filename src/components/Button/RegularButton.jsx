import css from './RegularButton.module.css';

export default function RegularButton({ clickHandler, children }) {
    return (
        <button
            className={css.container}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}
import css from './RegularButton.module.css';

export default function RegularButton({ name, clickHandler }) {
    return (
        <button
            className={css.container}
            onClick={clickHandler}
        >
            {name}
        </button>
    );
}
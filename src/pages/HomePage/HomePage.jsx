import { useNavigate } from 'react-router';
import RegularButton from '../../components/Button/RegularButton.jsx';
import css from './HomePage.module.css';

export default function HomePage() {
    const navigate = useNavigate();

    const navigateToCatalog = () => {
        navigate('/catalog');
    }

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <h1>Campers of your dreams</h1>
                <h2>You can find everything you want in our catalog</h2>
                <RegularButton clickHandler={navigateToCatalog}>
                    View Now
                </RegularButton>
            </div>
        </div>
    );
}

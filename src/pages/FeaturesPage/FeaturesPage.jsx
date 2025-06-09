import { useSelector } from 'react-redux';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';
import BookForm from '../../components/BookForm/BookForm.jsx';
import css from './FeaturesPage.module.css';

import {CATEGORIES, DETAILS} from '../../utils/constants.js';

export default function FeaturesPage() {
    const { details } = useSelector(state => state.campers);

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
        <>
            <div className={css.container}>
                <CategoryList categories={getCategories()} />
                <div className={css.vehicleDetails}>
                    <p>Vehicle details</p>
                    <ul className={css.detailList}>
                        {DETAILS.map(({ id, name }) => (
                            <li key={id}>
                                <span>{name}</span>
                                <span>{details[name]}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <BookForm />
        </>
    );
}
import { useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import FormatedPrice from '../../components/FormatedPrice/FormatedPrice.jsx';
import BookForm from '../../components/BookForm/BookForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import ErrorMessage from '../../components/Error/ErrorMessage.jsx';
import { fetchCamperDetails } from "../../redux/campersOps.js";
import clsx from 'clsx';
import css from './CamperDetailsPage.module.css';

import icons from '../../assets/img/icons.svg';

const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function CamperDetailsPage() {
    const { details, loading, error } = useSelector(state => state.campers);
    const { itemId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCamperDetails(itemId));
    }, [dispatch, itemId]);

    return (
        <>
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {Object.keys(details).length > 0 && <div className={css.container}>
                <div>
                    <div className={css.mainHeader}>
                        <h2>{details.name}</h2>
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
                        <div className={css.price}>
                            <p><FormatedPrice value={details.price} /></p>
                        </div>
                    </div>
                </div>
                <div className={css.gallery}>
                    {details.gallery.map((item, i) => (
                        <div key={i} className={css.image}>
                            <img src={item.thumb} alt="camper image"/>
                        </div>
                    ))}
                </div>
                <p className={css.desc}>{details.description}</p>
                <div className={css.navigation}>
                    <nav>
                        <NavLink to="features" className={linkClass}>
                            Features
                        </NavLink>
                        <NavLink to="reviews" className={linkClass}>
                            Reviews
                        </NavLink>
                    </nav>
                </div>
                <div className={css.navigationContent}>
                    <Outlet />
                </div>
            </div>}
        </>
    );
}

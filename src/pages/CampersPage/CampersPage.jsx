import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps.js';
import Filter from '../../components/Filter/Filter.jsx';
import RegularButton from '../../components/Button/RegularButton.jsx';
import CatalogItem from '../../components/CatalogItem/CatalogItem.jsx';
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/Error/ErrorMessage.jsx";
import css from './CampersPage.module.css';

import { FILTER_TYPES, VEHICLE_EQUIPMENT, VEHICLE_TYPE } from '../../utils/constants.js';

export default function CampersPage() {
    const { items, loading, error } = useSelector(state => state.campers);
    const dispatch = useDispatch();
    const checkedFilters = {
        location: '',
        equipment: [],
        type: ''
    };

    const filterHandler = (filterData) => {
        if (filterData.type === FILTER_TYPES.MANY_OF_MANY) {
            if (checkedFilters.equipment.includes(filterData.id)) {
                checkedFilters.equipment = checkedFilters.equipment.filter((filter) => {
                    return filter !== filterData.id;
                });
                return;
            }
            checkedFilters.equipment.push(filterData.id);
            return;
        }
        checkedFilters.type = filterData.id;
    }

    const onSearch = () => {
        console.log(checkedFilters);
    }

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    return (
        <div className={css.container}>
            <div className={css.sidebar}>
                <p>Filters</p>
                <Filter
                    title="Vehicle equipment"
                    params={VEHICLE_EQUIPMENT}
                    type={FILTER_TYPES.MANY_OF_MANY}
                    onChange={filterHandler}
                />
                <Filter
                    title="Vehicle type"
                    params={VEHICLE_TYPE}
                    type={FILTER_TYPES.ONE_OF_MANY}
                    onChange={filterHandler}
                />
                <RegularButton clickHandler={onSearch}>
                    Search
                </RegularButton>
            </div>
            <div className={css.main}>
                {loading && <Loader />}
                {error && <ErrorMessage message={error} />}
                {items.length > 0 && <ul className={css.list}>
                    {items.map((camper) => (
                        <li key={camper.id}>
                            <CatalogItem details={camper}/>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    );
}

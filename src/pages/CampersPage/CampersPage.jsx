import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps.js';
import { updateFilter } from '../../redux/filtersSlice.js';
import { selectFilteredCampers } from '../../redux/campersSlice.js';
import Filter from '../../components/Filter/Filter.jsx';
import RegularButton from '../../components/Button/RegularButton.jsx';
import CatalogItem from '../../components/CatalogItem/CatalogItem.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import ErrorMessage from '../../components/Error/ErrorMessage.jsx';
import css from './CampersPage.module.css';

import { FILTER_TYPES, EQUIPMENT_FILTER, TYPE_FILTER } from '../../utils/constants.js';

const checkedFilters = {
    location: '',
    equipment: [],
    type: ''
};

export default function CampersPage() {
    const { loading, error } = useSelector(state => state.campers);
    const filteredCampers = useSelector(selectFilteredCampers);
    const dispatch = useDispatch();

    const hasEquipment = (filterName) => {
        return checkedFilters.equipment.find((item) => {
            return item.key === filterName;
        });
    };

    const equipmentFilterHandler = (filterData) => {
        if (hasEquipment(filterData.key)) {
            checkedFilters.equipment = checkedFilters.equipment.filter((item) => {
                return item.key !== filterData.key;
            });
            return;
        }
        checkedFilters.equipment.push({
            key: filterData.key,
            value: EQUIPMENT_FILTER.find((item) => {
                return item.key === filterData.key
            }).value
        });
    }

    const typeFilterHandler = (filterData) => {
        checkedFilters.type = TYPE_FILTER.find((item) => {
            return item.id === filterData.id
        }).value;
    }

    const onSearch = () => {
        dispatch(updateFilter(checkedFilters));
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
                    type={FILTER_TYPES.CHECKBOX}
                    params={EQUIPMENT_FILTER}
                    onChange={equipmentFilterHandler}
                />
                <Filter
                    title="Vehicle type"
                    type={FILTER_TYPES.RADIO}
                    params={TYPE_FILTER}
                    onChange={typeFilterHandler}
                />
                <RegularButton clickHandler={onSearch}>
                    Search
                </RegularButton>
            </div>
            <div className={css.main}>
                {loading && <Loader />}
                {error && <ErrorMessage message={error} />}
                {filteredCampers.length > 0 && <ul className={css.list}>
                    {filteredCampers.map((camper) => (
                        <li key={camper.id}>
                            <CatalogItem details={camper}/>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    );
}

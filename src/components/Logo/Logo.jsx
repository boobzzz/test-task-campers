import { NavLink } from 'react-router';
import logo from '../../assets/img/logo.svg';

export default function Logo() {
    return(
        <div>
            <NavLink to="/">
                <img
                    src={`${logo}`}
                    alt="Logo"
                    width="136"
                    height="16"
                />
            </NavLink>
        </div>
    );
}
import { NavLink } from 'react-router';
import logo from '../../assets/images/logo.svg';

export default function Logo() {
    return(
        <div>
            <NavLink to="/">
                <img
                    src={`${logo}`}
                    alt="Logo"
                    width="132"
                    height="24"
                />
            </NavLink>
        </div>
    );
}
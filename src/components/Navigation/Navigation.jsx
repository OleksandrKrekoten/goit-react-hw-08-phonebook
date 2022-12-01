import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { AnimateCharcter } from './Navigation.styled';
export const Navigation = () => {
    const { isLoggedIn } = useAuth()
    return (
        <nav>
            <NavLink to="/">
                <AnimateCharcter>phoneBook</AnimateCharcter>
                {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            </NavLink>
        </nav>
    );
 }
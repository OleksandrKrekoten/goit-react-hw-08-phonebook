import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { AnimateCharcter, NavBtn, Nav } from './Navigation.styled';
import { MdRecentActors } from 'react-icons/md';
export const Navigation = () => {
    const { isLoggedIn } = useAuth()
    return (
        <Nav>
            <NavLink to="/">
                <AnimateCharcter>phoneBook</AnimateCharcter>
            </NavLink>
            {isLoggedIn && (
                <NavBtn to="/contacts">
                    <span>Contacts</span>
                    <MdRecentActors/>
                </NavBtn>
            )}
        </Nav>
    );
 }
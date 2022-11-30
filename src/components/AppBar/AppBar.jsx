import { NavLink, Link } from 'react-router-dom';
import { AnimateCharcter, Header, NavList, NavItem } from './AppBar.styled';

export const AppBar = () => {
    return (
        <Header>
            <Link to={'/'}>
                <AnimateCharcter>phoneBook</AnimateCharcter>
            </Link>
            <nav>
                <NavList>
                    <NavItem>
                        <NavLink to={'/register'}>register</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={'/login'}>login</NavLink>
                    </NavItem>
                </NavList>
            </nav>
        </Header>
    );
};

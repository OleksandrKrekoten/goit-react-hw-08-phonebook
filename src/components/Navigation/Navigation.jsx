import { useAuth } from 'hooks/useAuth';
import { BsFillHouseFill, BsFillPeopleFill } from 'react-icons/bs';
import { Nav, NavBtn } from './Navigation.styled';
export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <Nav>
            <NavBtn to="/">
                <span>PhoneBook</span> <BsFillHouseFill />
            </NavBtn>
            {isLoggedIn && (
                <NavBtn to="/contacts">
                    <span>Contacts</span>
                    <BsFillPeopleFill />
                </NavBtn>
            )}
        </Nav>
    );
};

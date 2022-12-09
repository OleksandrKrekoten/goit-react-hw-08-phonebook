import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Menu, MenuDiscription, LogoutBtn, AnimateCharcter } from './UserMenu.styled';
import { MdLogout } from 'react-icons/md';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <Menu>
            <MenuDiscription>
                <AnimateCharcter> {user.name}</AnimateCharcter>
            </MenuDiscription>
            <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
                <span>Logout</span> <MdLogout />
            </LogoutBtn>
        </Menu>
    );
};

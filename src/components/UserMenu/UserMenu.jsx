import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Menu, MenuDiscription, LogoutBtn } from './UserMenu.styled';
import { MdLogout } from 'react-icons/md';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <Menu>
            <MenuDiscription>Welcome, {user.name}</MenuDiscription>
            <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
                <span>Logout</span> <MdLogout />
            </LogoutBtn>
        </Menu>
    );
};

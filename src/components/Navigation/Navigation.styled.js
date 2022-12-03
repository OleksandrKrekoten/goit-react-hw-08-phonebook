import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
display: flex;
align-items: center;
`
export const NavBtn = styled(NavLink)`
display: flex;
align-items: center;
    padding: 10px 20px;
    border: 1px solid #242c3b;
    background-color: #ffffff;
    color: #353f54;
    text-decoration: none;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background-color 400ms, color 400ms;
    :not(:last-child) {
        margin-right: 25px;
    }
    span{
        margin-right: 10px;
    }
    :hover {
        color: #ffffff;
        background-color: #3fb0ff;
        box-shadow: 0px 25px 126px -11px rgba(255, 255, 255, 0.86);
    }
    &.active {
        color: #ffffff;
        background-color: #3fb0ff;
        box-shadow: 0px 25px 126px -11px rgba(255, 255, 255, 0.86);
        box-shadow: inset 2px -1px 37px 7px rgba(0, 0, 0, 0.31);
    }
`;
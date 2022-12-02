import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
display: flex;
align-items: center;
`

export const AnimateCharcter = styled.h3`
    text-transform: uppercase;
    background-image: linear-gradient(
        -225deg,
        #e43409 0%,
        #e8e937 29%,
        #b737e9 67%,
        #b52782 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 30px;
    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
`;
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
    margin-left: 25px;
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
    span {
        margin-right: 10px;
    }
`;
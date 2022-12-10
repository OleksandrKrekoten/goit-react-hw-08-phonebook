import styled from '@emotion/styled';
export const AnimateCharcter = styled.span`
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
    margin-left: 10px;
    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
`;
export const MenuDiscription = styled.p`
    text-transform: uppercase;
    font-size: 10px;
    margin:0 25px;
    @media (min-width: 780px) {
       font-size: 20px;
    }
`;

export const LogoutBtn = styled.button`
    display: flex;
    padding: 5px 10px;
    border: 1px solid #242c3b;
    background-color: #ffffff;
    color: #353f54;
    text-decoration: none;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background-color 400ms, color 400ms;
    align-items: center;
    :not(:last-child) {
        margin-right: 25px;
    }
    :hover {
        color: #ffffff;
        background-color: #3fb0ff;
        box-shadow: 0px 25px 126px -11px rgba(255, 255, 255, 0.86);
    }
    span {
        display: none;
    }
    @media (min-width: 780px) {
        padding: 10px 20px;
        span {
            display: flex;

            margin-right: 10px;
        }
    }
`;

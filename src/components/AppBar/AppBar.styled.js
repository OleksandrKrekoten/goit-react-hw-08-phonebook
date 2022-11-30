import styled from '@emotion/styled';

export const AnimateCharcter = styled.h3`
    text-transform: uppercase;
    background-image: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
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

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const NavList = styled.ul`
display: flex;
list-style: none;
`
export const NavItem = styled.li`
:not(:last-child){
    margin-right: 25px;
}
`
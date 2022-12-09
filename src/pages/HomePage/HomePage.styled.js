import styled from '@emotion/styled';

export const HeroSection = styled.div`
display: flex;
align-items: center;
padding-top: 80px;
max-width: 1300px;
margin-left: auto;
margin-right: auto;

`
export const HeroDiscription = styled.div`
    background-color:#ffffff;
    padding: 40px;
    border-radius: 5px;
`;

export const Img = styled.img`
    display: none;
    @media (min-width: 780px) {
        display: block;
    }
`;
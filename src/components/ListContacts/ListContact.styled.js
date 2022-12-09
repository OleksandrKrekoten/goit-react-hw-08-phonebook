import styled from '@emotion/styled';

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    ;
`;
export const Item = styled.li`
    display: flex;
    text-align: center;
    align-items: center;
    div {
        display: flex;
        width: 150px;
        @media (min-width: 400px) {
            width: 200px;
        }
        @media (min-width: 768px) {
            width: 250px;
        }
    }
    :not(:last-child) {
        margin-bottom: 25px;
    }
`;
export const Wrraper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 400px) {
        flex-direction: row;
    }
`;
export const Name = styled.p`
    font-weight: 700;
    margin-right: 16px;
    font-size: 10px;
    
    @media (min-width: 780px) {
        font-size:16px;
        
    }

`;
export const  PhoneNum = styled.p`
font-size: 10px;
@media (min-width: 780px) {
        font-size: 16px;
        
    }
`

export const DeleteBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #0b0e24;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: #0b0e24;
    background-color: transparent;
    margin:0 16px;
    transition: background-color 200ms ease-in;
    :hover,
    :focus {
        background-color: #0b0e24;
        color: white;
    }
`;
export const Avatar = styled.img`
    width: 35px;
    margin-right: 16px;
    @media (min-width: 780px) {
        width: 60px;
        
    }
`;

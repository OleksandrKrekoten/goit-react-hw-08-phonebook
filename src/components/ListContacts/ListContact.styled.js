import styled from '@emotion/styled';



export const List = styled.ul`
    list-style: none;
`
export const Item = styled.li`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    div{display:flex}
    :not(:last-child){
        margin-bottom: 25px;
    }
`;
export const Name = styled.p`
    font-weight: 700;
    margin-right: 16px;
`;


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
    margin-right: 16px;
    transition: background-color 200ms ease-in;
    :hover,
    :focus {
        background-color: #0b0e24;
        color: white;
    }
`;
export const Avatar = styled.img`
width: 60px;
margin-right: 16px;
`
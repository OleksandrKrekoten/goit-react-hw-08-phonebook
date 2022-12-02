import styled from '@emotion/styled';

export const Input = styled.input`

    display: block;
    margin: 10px 0px 25px 0px;
    height: 30px;
    width: max-content;
    padding-left: 15px;
    font-size: 20px;
    border: 1px solid silver;
    border-radius: 5px;
    outline: none;
    transition: 400ms;
    transition: background-color 400ms, color 400ms;
    padding-left: 30px;

    :focus {
        background-color: #3fb0ff;
        color: #ffffff;
        
    }
`;
export const Icon = styled.span`
position: absolute;
top: 10px;
left: 10px;
font-size: 15px;
color: black;
`
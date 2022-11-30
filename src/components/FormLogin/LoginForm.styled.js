import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: aquamarine;
    height: 83.9vh;
    padding-top: 60px;
  
`;
export const Wrraper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    align-items: center;
    padding: 40px;
    
`;


export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    width: 350px;
`;

export const FormTitle = styled.h2`

font-family: 'Montserraf', sans-serif;
font-size: 40px;
margin-bottom: 60px;

`
export const InputField = styled.div`
position:relative;`



export const FormInput = styled.input`
    margin: 25px 0px;
    height: 30px;
    width: 100%;
    padding-left: 15px;
    font-size: 20px;
    border: 1px solid silver;
    outline: none;
    transition: 400ms;
    :focus {
        border: 1px solid #700fdd;
    }
`;
export const FormLabel = styled.label`
    
    
    
    pointer-events: none;
    color: gray;
    font-size: 20px;
    
`;
export const LoginBtn = styled.button`
    display: block;
    height: 30px;
    width: 100%;
    background-color: aquamarine;
    border: none;
    transition: 400ms;
    :hover,
    :focus {
        background-color: #700fdd;
        border: 1px solid grey;
        color:  white;
    }
`;

import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    width: 350px;
`;

export const FormTitle = styled.h2`
    color: #ffffff;
    font-size: 40px;
    margin-bottom: 60px;
`;
export const InputField = styled.div`
    position: relative;
`;

export const FormInput = styled.input`
    margin: 10px 0px 25px 0px;
    height: 30px;
    width: 100%;
    padding-left: 15px;
    font-size: 20px;
    border: 1px solid silver;
    border-radius: 5px;
    outline: none;
    transition: 400ms;
    transition: background-color 400ms, color 400ms;

    :focus {
        background-color: #3fb0ff;
        color: #ffffff;
    }
`;
export const FormLabel = styled.label`
    pointer-events: none;
    color: #ffffff;
    font-size: 20px;
`;
export const BtnForm = styled.button`
    display: block;
    height: 30px;
    width: 100%;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    transition: background-color 400ms, color 400ms;

    :hover,
    :focus {
        background-color: #3fb0ff;
        color: #ffffff;
    }
`;
export const Text = styled.p`
    font-size: 16px;
    color: #ffffff;
    a {
        color: #ffffff;
        padding: 5px;
        border-radius: 5px;
        transition: color 400ms;
        :hover,
        :focus {
            color: #353f54;
        }
    }
`;

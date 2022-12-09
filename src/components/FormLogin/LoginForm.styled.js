import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    width: 200px;
    @media (min-width: 780px) {
        width: 350px;
    }
`;

export const FormTitle = styled.h2`
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 30px;
    @media (min-width: 780px) {
        font-size: 40px;
        margin-bottom: 60;
    }
`;
export const InputField = styled.div`
    position: relative;
`;

export const FormInput = styled.input`
    margin: 10px 0px 15px 0px;
    height: 30px;
    width: 90%;
    padding-left: 15px;
    font-size: 10px;
    border: 1px solid silver;
    border-radius: 5px;
    outline: none;
    transition: 400ms;
    transition: background-color 400ms, color 400ms;
    @media (min-width: 780px) {
        font-size: 20px;
        width: 100%;
        margin: 10px 0px 25px 0px;
    }

    :focus {
        background-color: #3fb0ff;
        color: #ffffff;
    }
`;
export const FormLabel = styled.label`
    pointer-events: none;
    color: #ffffff;
    font-size: 10px;
    @media (min-width: 780px) {
        font-size: 20px;
    }
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
    font-size: 10px;
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

import { Form as FormikForm, Field as FormikInput } from 'formik';
import styled from '@emotion/styled';

export const Form = styled(FormikForm)`
    height: max-content;
    flex: 1;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 40px;
    margin: 0 0 25px 0;
    @media (min-width: 780px) {
        width: 400px;
    }
    @media (min-width: 1200px) {
        width: 400px;
        margin: 0 25px 0 0;
    }
    span {
        font-weight: 700;
        display: block;
        font-size: 14px;
        color: #0b0e24;
        cursor: pointer;
    }
    label {
        position: relative;
    }
    div {
        position: absolute;
        top: 64px;
        left: 10px;
        color: #c70039;
        font-size: 12px;
    }
`;
export const Field = styled(FormikInput)`
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
export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin-top: 25px;
    width: 150px;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    transition: background-color 400ms, color 400ms;
    border: 1px solid #3fb0ff;
    :hover,
    :focus {
        background-color: #3fb0ff;
        color: #ffffff;
        span {
            color: #ffffff;
        }
    }
    span {
        margin-right: 10px;
        transition:  color 400ms;
    }
`;

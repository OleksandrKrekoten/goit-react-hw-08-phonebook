import {
    FormTitle,
    InputField,
    Text,
    Form,
    FormLabel,
    FormInput,
    BtnForm,
} from 'components/FormLogin/LoginForm.styled';
import { WrapperForm } from 'components/WrapperForForm/WrapperForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };
    return (
        <WrapperForm>
            <FormTitle>Create account</FormTitle>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <InputField>
                    <FormLabel>Username</FormLabel>
                    <FormInput type="text" name="name" />
                </InputField>

                <InputField>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" name="email" />
                </InputField>

                <InputField>
                    <FormLabel>Password</FormLabel>
                    <FormInput type="password" name="password" />
                </InputField>

                <BtnForm type="submit">Register</BtnForm>
            </Form>
            <Text>
                Have already an account?
                <Link to={'/login'}> Login now</Link>
            </Text>
        </WrapperForm>
    );
};

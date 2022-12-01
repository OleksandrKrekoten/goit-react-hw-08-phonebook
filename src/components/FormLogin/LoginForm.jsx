import {
    Form,
    FormTitle,
    FormInput,
    FormLabel,
    InputField,
    BtnForm,
    Text,
} from 'components/FormLogin/LoginForm.styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { WrapperForm } from 'components/WrapperForForm/WrapperForm';
import { logIn } from 'redux/auth/operations';
export const LoginForm = () => {
    const dispatch = useDispatch();
     const handleSubmit = e => {
         e.preventDefault();
         const form = e.currentTarget;
         dispatch(
             logIn({
                 email: form.elements.email.value,
                 password: form.elements.password.value,
             })
         );
         form.reset();
     };
    return (
        <WrapperForm>
            <FormTitle>Login Form</FormTitle>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <InputField>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" name="email" id="email" />
                </InputField>

                <InputField>
                    <FormLabel>Password</FormLabel>
                    <FormInput type="password" name="password" id="password" />
                </InputField>

                <BtnForm type="submit">Log In</BtnForm>
            </Form>
            <Text>
                Not a member?<Link to={'/register'}> Signup now</Link>
            </Text>
        </WrapperForm>
    );
};

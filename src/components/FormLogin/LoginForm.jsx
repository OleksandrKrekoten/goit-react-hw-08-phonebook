import {
    Wrraper,
    Form,
    Container,
    FormTitle,
    FormInput,
    FormLabel,
    InputField,
    LoginBtn,
} from 'components/FormLogin/LoginForm.styled';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    return (
        <Container>
            <Wrraper>
                <FormTitle>Login Form</FormTitle>
                <Form autoComplete="off">
                    <InputField>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="email" name="email" id="email" />
                    </InputField>

                    <InputField>
                        <FormLabel>Password</FormLabel>
                        <FormInput
                            type="password"
                            name="password"
                            id="password"
                        />
                    </InputField>

                    <LoginBtn type="submit">Log In</LoginBtn>
                </Form>
                <p>
                    Not a member?<Link to={'/register'}> Signup now</Link>
                </p>
            </Wrraper>
        </Container>
    );
};

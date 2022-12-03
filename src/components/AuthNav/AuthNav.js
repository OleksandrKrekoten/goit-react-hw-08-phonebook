import { AuthBtn } from "./AuthNav.styled";



export const AuthNav = () => {
    return (
        <div>
            <AuthBtn to={'/register'}>register</AuthBtn>
            <AuthBtn to={'/login'}>login</AuthBtn>
        </div>
    );
}
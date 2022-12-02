import { AuthBtn } from "./AuthNav.styled";

const { NavLink } = require("react-router-dom");

export const AuthNav = () => {
    return (
        <div>
            <AuthBtn to={'/register'}>register</AuthBtn>
            <AuthBtn to={'/login'}>login</AuthBtn>
        </div>
    );
}
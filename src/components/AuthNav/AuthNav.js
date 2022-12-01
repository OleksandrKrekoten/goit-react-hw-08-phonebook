const { NavLink } = require("react-router-dom");

export const AuthNav = () => {
    return (
        <div>
            <NavLink to={'/register'}>register</NavLink>
            <NavLink to={'/login'}>login</NavLink>
        </div>
    );
}
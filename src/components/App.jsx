import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';
import { LoginForm } from './FormLogin/LoginForm';
import { RegisterForm } from './FormRegister/RegisterForm';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Contacts } from 'pages/Contacts/ContactPage';

export function App() {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="/register"
                        element={
                            <RestrictedRoute
                                redirectTo="/contacts"
                                component={<RegisterForm />}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <RestrictedRoute
                                redirectTo="/contacts"
                                component={<LoginForm />}
                            />
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute
                                redirectTo="/login"
                                component={<Contacts />}
                            />
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

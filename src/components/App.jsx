import { Contacts } from 'pages/Contacts/ContactPage';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { LoginForm } from './FormLogin/LoginForm';
import { RegisterForm } from './FormRegister/RegisterForm';

export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Route>
            </Routes>
        </div>
    );
}

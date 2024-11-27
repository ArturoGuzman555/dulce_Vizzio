import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Corrección aquí
const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Ahora puedes usarlo correctamente
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí se hace la petición para el login
        const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data) {
            onLogin(data); // Llama la función onLogin que viene de App.tsx
            navigate('/products');
        }
        else {
            alert('Login failed');
        }
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Login" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { children: "Email:" }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Password:" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsx("button", { type: "submit", children: "Login" })] })] }));
};
export default Login;

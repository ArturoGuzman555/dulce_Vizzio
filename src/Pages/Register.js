import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [phone, setPhone] = useState(0);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPass) {
            alert('Passwords do not match');
            return;
        }
        const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, confirmPass, phone }),
        });
        const data = await response.json();
        if (data) {
            alert('Registration successful!');
            navigate('/login');
        }
        else {
            alert('Registration failed');
        }
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Register" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { children: "Name:" }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Email:" }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Password:" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Confirm Password:" }), _jsx("input", { type: "password", value: confirmPass, onChange: (e) => setConfirmPass(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Phone:" }), _jsx("input", { type: "number", value: phone, onChange: (e) => setPhone(Number(e.target.value)), required: true })] }), _jsx("button", { type: "submit", children: "Register" })] })] }));
};
export default Register;

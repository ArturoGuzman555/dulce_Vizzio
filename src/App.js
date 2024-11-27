import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './component/Navbar';
function App() {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState(null); // Para manejar el estado de autenticación
    useEffect(() => {
        if (user) {
            fetch(`${import.meta.env.REACT_APP_API_URL}/products`)
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .catch((error) => console.error('Error fetching products:', error));
        }
        else {
            setProducts([]);
        }
    }, [user]);
    const handleLogin = (userData) => {
        setUser(userData);
    };
    const handleLogout = () => {
        setUser(null);
    };
    return (_jsxs(Router, { children: [_jsx(Navbar, { onLogout: handleLogout, user: user }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, { onLogin: handleLogin }) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/products", element: user ? _jsx(ProductList, { products: products }) : _jsx(Login, { onLogin: handleLogin }) })] })] }));
}
const ProductList = ({ products }) => {
    const navigate = useNavigate(); // Ahora 'useNavigate' está dentro del componente
    return (_jsxs("div", { children: [_jsx("h1", { children: "Lista de Productos" }), _jsx("ul", { children: products.map((product) => (_jsxs("li", { children: [product.name, " - $", product.price] }, product.id))) }), _jsx("button", { onClick: () => navigate('/'), children: "Ir a inicio" })] }));
};
export default App;

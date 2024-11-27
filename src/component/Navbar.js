import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = ({ onLogout, user }) => (_jsxs("nav", { className: "navbar", children: [_jsxs("ul", { className: "navbar-list", children: [_jsx("li", { className: "navbar-item", children: _jsx(Link, { className: "navbar-link", to: "/", children: "Home" }) }), _jsx("li", { className: "navbar-item", children: _jsx(Link, { className: "navbar-link", to: "/little-lili", children: "Little Lili" }) })] }), _jsx("div", { className: "navbar-title", children: "Dulce Vizzio" }), " ", _jsx("ul", { className: "navbar-list", children: user ? (_jsx("li", { className: "navbar-item", children: _jsx("button", { onClick: onLogout, className: "navbar-button", children: "Logout (X)" }) })) : (_jsx("li", { className: "navbar-item", children: _jsx(Link, { className: "navbar-link", to: "/login", children: "Login" }) })) })] }));
export default Navbar;

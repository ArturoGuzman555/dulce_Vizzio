import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  onLogout: () => void;
  user: any;
}

const Navbar = ({ onLogout, user }: NavbarProps) => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <Link className="navbar-link" to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/little-lili">Little Lili</Link>
      </li>
    </ul>
    <div className="navbar-title">Dulce Vizzio</div> {/* Título centrado */}
    <ul className="navbar-list">
      {user ? (
        <li className="navbar-item">
          <button onClick={onLogout} className="navbar-button">Logout (X)</button>
        </li>
      ) : (
        <li className="navbar-item">
          <Link className="navbar-link" to="/login">Login</Link>
        </li>
      )}
    </ul>
  </nav>
);

export default Navbar;

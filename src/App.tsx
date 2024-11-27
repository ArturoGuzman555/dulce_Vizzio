import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './component/Navbar';

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null); // Para manejar el estado de autenticación

  useEffect(() => {
    if (user) {
      fetch(`${import.meta.env.REACT_APP_API_URL}/products`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    } else {
      setProducts([]);
    }
  }, [user]);

  const handleLogin = (userData: any) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products"
          element={user ? <ProductList products={products} /> : <Login onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
}

const ProductList = ({ products }: { products: any[] }) => {
  const navigate = useNavigate();  // Ahora 'useNavigate' está dentro del componente

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Ir a inicio</button>
    </div>
  );
};

export default App;

import { useState, useEffect } from 'react';
import './Home.css'; // Asegúrate de que los estilos estén siendo aplicados
import Navbar from '../component/Navbar'; // Importar la barra de navegación

function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar los productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/products`);
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Error fetching products');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">


      {/* Título de la página */}
      <h1 className="home-header">Lista de Productos</h1>

      {/* Mostrar mensaje de error si ocurre algún problema */}
      {error && <p className="error-message">{error}</p>}

      {/* Mostrar mensaje de carga */}
      {loading && <p className="loading-message">Cargando productos...</p>}

      {/* Lista de productos */}
      {!loading && !error && products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;

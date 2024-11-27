import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './Home.css'; // Asegúrate de que los estilos estén siendo aplicados
function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
            }
            catch (error) {
                setError('Error fetching products');
                console.error(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    return (_jsxs("div", { className: "home-container", children: [_jsx("h1", { className: "home-header", children: "Lista de Productos" }), error && _jsx("p", { className: "error-message", children: error }), loading && _jsx("p", { className: "loading-message", children: "Cargando productos..." }), !loading && !error && products.length === 0 ? (_jsx("p", { children: "No hay productos disponibles." })) : (_jsx("ul", { className: "product-list", children: products.map((product) => (_jsxs("li", { className: "product-item", children: [product.name, " - $", product.price] }, product.id))) }))] }));
}
export default Home;

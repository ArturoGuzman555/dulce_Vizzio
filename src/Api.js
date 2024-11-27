import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
export const fetchProducts = async (page, limit) => {
    const response = await axios.get(`${API_URL}/products?page=${page}&limit=${limit}`);
    return response.data;
};
export const fetchCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
};
export const createProduct = async (productData) => {
    const response = await axios.post(`${API_URL}/products`, productData, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
};
export const createCategory = async (categoryData) => {
    const response = await axios.post(`${API_URL}/categories`, categoryData, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
};

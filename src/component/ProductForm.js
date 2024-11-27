import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { createProduct, fetchCategories } from '../Api';
const CreateProductForm = () => {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [stock, setStock] = React.useState(0);
    const [imgUrl, setImgUrl] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [categories, setCategories] = React.useState([]);
    React.useEffect(() => {
        const getCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
        };
        getCategories();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            name,
            description,
            price,
            stock,
            imgUrl,
            category,
        };
        await createProduct(productData);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { children: "Nombre del Producto" }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Descripci\u00F3n" }), _jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Precio" }), _jsx("input", { type: "number", value: price, onChange: (e) => setPrice(Number(e.target.value)), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "Stock" }), _jsx("input", { type: "number", value: stock, onChange: (e) => setStock(Number(e.target.value)), required: true })] }), _jsxs("div", { children: [_jsx("label", { children: "URL de Imagen" }), _jsx("input", { type: "text", value: imgUrl, onChange: (e) => setImgUrl(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { children: "Categor\u00EDa" }), _jsx("select", { value: category, onChange: (e) => setCategory(e.target.value), required: true, children: categories.map((cat) => (_jsx("option", { value: cat.id, children: cat.name }, cat.id))) })] }), _jsx("button", { type: "submit", children: "Crear Producto" })] }));
};
export default CreateProductForm;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { createCategory } from '../Api';
const CreateCategoryForm = () => {
    const [name, setName] = React.useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const categoryData = { name };
        await createCategory(categoryData);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { children: "Nombre de la Categor\u00EDa" }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), required: true })] }), _jsx("button", { type: "submit", children: "Crear Categor\u00EDa" })] }));
};
export default CreateCategoryForm;

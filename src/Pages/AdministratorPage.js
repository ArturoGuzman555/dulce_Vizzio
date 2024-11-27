import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CreateProductForm from '../component/ProductForm';
import CreateCategoryForm from '../component/ProductForm';
const ManageProductsPage = () => {
    return (_jsxs("div", { children: [_jsx("h2", { children: "Administrar Productos" }), _jsx(CreateProductForm, {}), _jsx("h2", { children: "Administrar Categor\u00EDas" }), _jsx(CreateCategoryForm, {})] }));
};
export default ManageProductsPage;

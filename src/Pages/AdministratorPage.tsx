import * as React from 'react';
import CreateProductForm from '../component/ProductForm.js';
import CreateCategoryForm from '../component/ProductForm.js';

const ManageProductsPage = () => {
  return (
    <div>
      <h2>Administrar Productos</h2>
      <CreateProductForm />
      <h2>Administrar Categorías</h2>
      <CreateCategoryForm />
    </div>
  );
};

export default ManageProductsPage;

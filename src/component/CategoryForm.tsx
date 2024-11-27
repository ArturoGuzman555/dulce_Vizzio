import * as React from 'react';
import { createCategory, createProduct, fetchCategories } from '../Api.js';

const CreateCategoryForm = () => {
  const [name, setName] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const categoryData = { name };
    await createCategory(categoryData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre de la Categoría</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button type="submit">Crear Categoría</button>
    </form>
  );
};

export default CreateCategoryForm;

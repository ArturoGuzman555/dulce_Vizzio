import * as React from 'react';
import { createProduct, fetchCategories } from '../Api.js';

const CreateProductForm = () => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [stock, setStock] = React.useState(0);
  const [imgUrl, setImgUrl] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [categories, setCategories] = React.useState<any[]>([]);

  React.useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Producto</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Descripción</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Precio</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
      </div>
      <div>
        <label>Stock</label>
        <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} required />
      </div>
      <div>
        <label>URL de Imagen</label>
        <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
      </div>
      <div>
        <label>Categoría</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default CreateProductForm;

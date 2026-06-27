import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';

const ProductForm: React.FC = () => {
  const { addProduct, updateProduct } = useProducts();
  const [productId, setProductId] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [quantity, setQuantity] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productData = { name, price: Number(price), quantity: Number(quantity) };

    if (productId) {
      updateProduct(productId, productData);
    } else {
      addProduct(productData);
    }

    resetForm();
  };

  const resetForm = () => {
    setProductId(null);
    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <button type="submit">{productId ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;
import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Products
export const getProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

export const getProduct = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const getCategories = async () => {
  const { data } = await api.get('/products/categories');
  return data;
};

export const getProductsByCategory = async (category) => {
  const { data } = await api.get(`/products/category/${category}`);
  return data;
};

// Mock admin operations (FakeStoreAPI returns mock responses)
export const createProduct = async (product) => {
  const { data } = await api.post('/products', product);
  return data;
};

export const updateProduct = async (id, product) => {
  const { data } = await api.put(`/products/${id}`, product);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};

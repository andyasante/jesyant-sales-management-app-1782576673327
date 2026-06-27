import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const fetchSalesReports = async () => {
  const response = await axios.get(`${API_URL}/sales-reports`);
  return response.data;
};

export const fetchCustomers = async () => {
  const response = await axios.get(`${API_URL}/customers`);
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await axios.post(`${API_URL}/orders`, orderData);
  return response.data;
};

export const authenticateUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const fetchInventory = async () => {
  const response = await axios.get(`${API_URL}/inventory`);
  return response.data;
};

export const updateProductStock = async (productId, stockData) => {
  const response = await axios.put(`${API_URL}/products/${productId}/stock`, stockData);
  return response.data;
};
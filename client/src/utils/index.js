import iziToast from 'izitoast';

const API_BASE_URL = 'http://localhost:5000';

// Izi Toast
export const notifyMessage = (message) => {
  iziToast.show({
    message,
    position: "bottomRight",
    color: "rgb(34 197 94 / 70%",
    icon: "bi-check-circle-fill",
    iconColor: "#fff",
    titleColor: "#fff",
    messageColor: "#fff",
  });
};

export const fetchProducts = async (query, isSearch = false) => {
  try {
    const url = `${API_BASE_URL}/api/products${isSearch ? `?q=${query}` : ''}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data.products && data.products.length > 0 ? data.products : null;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductsTest = async (route) => {
  try {
    const url = `${API_BASE_URL}/api/${route}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data.products && data.products.length > 0 ? data.products : null;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProduct = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/${productId}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const url = `${API_BASE_URL}/api/categories`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch categories');
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export const fetchProductCategories = async (categoryId ,query) => {
  try {
    const url = `${API_BASE_URL}/api/product-categories/${categoryId}/${query ? `q=${query}` : ''}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data.products && data.products.length > 0 ? data.products : null;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


export const sendContactForm = async (formData) => {
  try {
    const params = new URLSearchParams(formData);
    const response = await fetch(`${API_BASE_URL}/api/contact?${params}`);
    if (!response.ok) throw new Error('Failed to send contact form');
    return await response.json();
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};
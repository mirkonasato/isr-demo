const API_URL = process.env.API_URL;

async function fetchJson(path) {
  const response = await fetch(API_URL + path);
  if (!response.ok) {
    throw new Error(`Fetching ${path} failed with ${response.status}`);
  }
  return await response.json();
}

export function getProduct(id) {
  console.log('Fetching product', id);
  return fetchJson(`/collections/products/records/${id}`);
}

export async function getProducts() {
  console.log('Fetching products');
  const { items } = await fetchJson('/collections/products/records');
  return items;
}

import { getProduct, getProducts } from '../../lib/products';

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const product = await getProduct(id);
  return {
    props: { product },
    revalidate: 30, // seconds
  };
}

function ProductPage({ product }) {
  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.price.toFixed(2)}</p>
    </main>
  );
}

export default ProductPage;

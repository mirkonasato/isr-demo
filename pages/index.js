import Link from 'next/link';
import { getProducts } from '../lib/products';

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 30, // seconds
  };
}

function HomePage({ products }) {
  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name}: {product.price.toFixed(2)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomePage;

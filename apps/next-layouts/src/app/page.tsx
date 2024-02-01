import ProductsList from '../components/ProductsList.tsx';
import { fetchProducts } from '../products.ts';

export default async function Shop() {
  const products = await fetchProducts();
  return <ProductsList products={products} />;
}

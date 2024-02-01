import { fetchProducts } from '../../../products.ts';
import Image from 'next/image';

export default async function ProductPage({ params: { id } }) {
  const products = await fetchProducts();
  const product = products[id];
  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-7xl h-44">
          <Image
            src={product.imageSrc}
            alt={product.imageSrc}
            className="h-full w-full object-cover object-center"
            width={1300}
            height={300}
          />
        </div>

        {/* Product info */}
        <div className="mx-auto pt-10">
          <div className="col-span-2 border-r border-gray-200 pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 row-span-3 mt-0">
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Añadir al carrito
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

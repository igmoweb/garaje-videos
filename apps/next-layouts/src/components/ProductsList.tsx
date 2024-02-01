import Image from 'next/image';

const ProductsList = ({ products }) => {
  return (
    <div className="grid gap-x-6 gap-y-10 grid-cols-3">
      {products.map((product) => (
        <a key={product.id} href={`/product/${product.id}`}>
          <Image src={product.imageSrc} width={200} height={200} alt="" />
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-gray-900">{product.price}</p>
        </a>
      ))}
    </div>
  );
};

export default ProductsList;

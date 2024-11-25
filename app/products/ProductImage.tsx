'use client';

import Image from 'next/image';
type Props = {
  product: Product;
  fill?: boolean;
};

export default function ProductImage({ product, fill }: Props) {
  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          fill
          alt={product.title || "Product Image"}
          className="object-cover w-full h-full"
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title || "Product Image"}
          width={400}
          height={1000}
          className="object-cover w-full h-full"
        />
      )}
    </>
  );
}

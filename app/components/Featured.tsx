// 'use client';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Skeleton } from '@/components/ui/skeleton';
// import { motion } from 'framer-motion';

// type Featured = {
//   id: number;
//   image: string;
//   description: string;
//   title: string;
// };

// export default function FeaturedProducts() {
//   const [features, setFeatures] = useState<Featured[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchFeatured = async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const features = await response.json();

//       const FeaturedProducts = features.filter((feature: Featured) =>
//         [5, 10, 15, 20].includes(feature.id)
//       );
//       setFeatures(FeaturedProducts);
//       setLoading(false);
//     };
//     fetchFeatured();
//   }, []);

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <h2 className="font-jost text-black text-4xl font-bold mt-10">
//         Featured Products
//       </h2>
//       <div className="flex flex-row mt-10 space-x-10">
//         {loading ? (
//           <div className="grid xsm:grid-cols-1 xsm:space-x-0 md:grid-cols-2 md:gap-5 lg:grid-cols-4 space-x-10 mt-10">
//             {[...Array(4)].map((_, index) => (
//               <Card key={index} className="w-64 font-jost">
//                 <Skeleton className="w-52 h-10 ml-5 mt-5 bg-slate-300 rounded-xl" />
//                 <Skeleton className="w-52 h-10 ml-5 mt-5 bg-slate-300 rounded-xl" />
//                 <Skeleton className="w-52 h-36 ml-5 mt-5 bg-slate-300 rounded-xl" />
//                 <Skeleton className="w-52 h-10 ml-5 mt-5 mb-5 bg-slate-300 rounded-xl" />
//               </Card>
//             ))}
//           </div>
//         ) : (
//           <motion.div
//             className="grid xsm:grid-cols-1 xsm:space-x-0 md:grid-cols-2 md:gap-5 lg:grid-cols-4 space-x-10 mt-2"
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//           >
//             {features.map((feature) => (
//               <motion.div whileHover={{ scale: 1.1 }} key={feature.id}>
//                 <Card className="w-64 font-jost">
//                   <CardHeader>
//                     <CardTitle>{feature.title.slice(0, 20)}...</CardTitle>
//                     <CardDescription>
//                       {feature.description.slice(0, 20)}...
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="w-full h-48 flex justify-center items-center">
//                       <Image
//                         src={feature.image}
//                         alt={`Image for ${feature.title}`}
//                         width={100}
//                         height={50}
//                         style={{ width: 'auto', height: 'auto' }}
//                       />
//                     </div>
//                   </CardContent>
//                   <CardFooter>
//                     <motion.div
//                       whileHover={{
//                         borderBottomColor: '#000',
//                         borderBottomWidth: '2px',
//                       }}
//                       transition={{ duration: 0.2 }}
//                       className="border-b-2 border-transparent"
//                     >
                    
//                     </motion.div>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';


// type Featured = {
//   id: number;
//   image: string;
//   description: string;
//   title: string;
// };

// export default function FeaturedProducts() {
//   const [features, setFeatures] = useState<Featured[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchFeatured = async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const features = await response.json();

//       const FeaturedProducts = features.filter((feature: Featured) =>
//         [5, 10, 15, 20].includes(feature.id)
//       );
//       setFeatures(FeaturedProducts);
//       setLoading(false);
//     };
//     fetchFeatured();
//   }, []);

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <h2 className="font-jost text-black text-4xl font-bold mt-10">
//         Featured Products
//       </h2>
//       <div className="grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
//         {loading
//           ? [...Array(4)].map((_, index) => (
//               <div key={index} className="w-64 h-64 bg-gray-200"></div>
//             ))
//           : features.map((feature) => (
//               <div key={feature.id} className="w-64 p-4 border rounded">
//                 <h3 className="text-lg font-semibold">
//                   {feature.title.slice(0, 20)}...
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   {feature.description.slice(0, 20)}...
//                 </p>
//                 <div className="w-full h-48 flex justify-center items-center">
//                   <Image
//                     src={feature.image}
//                     alt={`Image for ${feature.title}`}
//                     width={100}
//                     height={50}
//                     style={{ width: 'auto', height: 'auto' }}
//                   />
//                 </div>
                
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "../components/Loading";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
};

export default function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();

            const filteredProducts = products.filter((product: Product) =>
                [1, 5, 8, 9, 10, 11, 12, 13].includes(product.id)
            );
            setProducts(filteredProducts);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:pt-24 sm:pb-4 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Trending products
                    </h2>
                    <Link
                        href="./products"
                        className="hidden text-sm font-semibold text-[var(--primary-color)] hover:text-indigo-500 sm:block"
                    >
                        Shop the collection
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center min-h-[300px]">
                        <Loading />
                    </div>
                ) : (
                    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <Link href={`./products/${product.id}`}>
                                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            className="h-full w-full object-center object-contain"
                                            width={300}
                                            height={400}
                                        />
                                    </div>
                                    <div className="relative mt-4">
                                        <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                                        <p className="mt-1 text-sm text-gray-500">${product.price}</p>
                                    </div>
                                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-60"
                                        />
                                        <p className="relative text-xs font-semibold text-white uppercase bg-red-600 px-2 py-1 rounded-md">
                                            Best Seller
                                        </p>
                                    </div>
                                </Link>
                                <div className="mt-6">
                                    <Link
                                        href={`./products/${product.id}`}
                                        className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                    >
                                        Add to cart<span className="sr-only">, {product.title}</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

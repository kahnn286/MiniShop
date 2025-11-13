'use client';

import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/lib/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const params = useParams();
  const { addToCart } = useCart();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', params.id],
    queryFn: () => getProduct(params.id),
  });

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
            <div className="relative h-96">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase mb-2">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating?.rate || 0)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  ({product.rating?.count || 0} reviews)
                </span>
              </div>

              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                ${product.price.toFixed(2)}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

'use client';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeClient from '@/components/HomeClient';
import ProductSkeleton from '@/components/ProductSkeleton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to MiniShop</h1>
            <p className="text-muted-foreground text-lg">Loading products...</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)}
          </div>
        </main>
      }>
        <HomeClient />
      </Suspense>
      <Footer />
    </div>
  );
}

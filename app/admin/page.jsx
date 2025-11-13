'use client';

import { useQuery } from '@tanstack/react-query';
import { getProducts, getCategories } from '@/lib/api';
import { Package, Layers, DollarSign, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const totalValue = products.reduce((sum, product) => sum + product.price, 0);
  const avgPrice = products.length > 0 ? totalValue / products.length : 0;

  const stats = [
    {
      title: 'Total Products',
      value: products.length,
      icon: Package,
      color: 'bg-blue-500',
    },
    {
      title: 'Categories',
      value: categories.length,
      icon: Layers,
      color: 'bg-green-500',
    },
    {
      title: 'Total Value',
      value: `$${totalValue.toFixed(2)}`,
      icon: DollarSign,
      color: 'bg-purple-500',
    },
    {
      title: 'Avg Price',
      value: `$${avgPrice.toFixed(2)}`,
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Products by Category</h2>
          <div className="space-y-3">
            {categories.map((category) => {
              const count = products.filter(p => p.category === category).length;
              const percentage = (count / products.length) * 100;
              
              return (
                <div key={category}>
                  <div className="flex justify-between mb-1">
                    <span className="capitalize">{category}</span>
                    <span className="font-semibold">{count}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Products</h2>
          <div className="space-y-3">
            {products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium truncate">{product.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {product.category}
                  </p>
                </div>
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

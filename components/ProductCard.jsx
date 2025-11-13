'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-64 bg-muted">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">
            {product.category}
          </Badge>
          
          <h3 className="font-semibold mb-2 line-clamp-2 h-12">
            {product.title}
          </h3>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <span className="text-2xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            size="icon"
            className="rounded-full"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

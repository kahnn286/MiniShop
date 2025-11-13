'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, LogOut } from 'lucide-react';
import { logout } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  const menuItems = [
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/products', icon: Package, label: 'Products' },
  ];

  return (
    <aside className="w-64 border-r bg-muted/40 h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Admin Panel
        </h2>
      </div>
      
      <Separator />
      
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Button
              key={item.href}
              asChild
              variant={isActive ? 'default' : 'ghost'}
              className="w-full justify-start"
            >
              <Link href={item.href}>
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            </Button>
          );
        })}
        
        <Separator className="my-4" />
        
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </nav>
    </aside>
  );
}

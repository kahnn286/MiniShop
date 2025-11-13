'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (login(credentials.username, credentials.password)) {
      toast({
        title: "Login successful!",
        description: "Welcome to the admin dashboard.",
      });
      router.push('/admin');
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Admin Login
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the admin dashboard
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          
          <Card className="mt-6 bg-muted">
            <CardContent className="pt-6">
              <p className="text-sm text-center text-muted-foreground">
                Demo credentials:<br />
                Username: <strong className="text-foreground">admin</strong><br />
                Password: <strong className="text-foreground">admin123</strong>
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

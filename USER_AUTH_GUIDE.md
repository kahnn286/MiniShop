# User Authentication System - Complete Guide 🔐

## Overview

Your MiniShop now has a complete user authentication system with registration, login, profile management, and order tracking!

## ✅ Features Added

### 1. **User Authentication**
- User registration with validation
- User login/logout
- Session management with localStorage
- Protected routes for user pages

### 2. **User Profile Management**
- View and edit profile information
- Update name, email, and phone number
- Profile page with user avatar

### 3. **Order Management**
- Create orders during checkout
- View order history
- Track order status
- Order details with items and shipping info

### 4. **Enhanced Navbar**
- User dropdown menu when logged in
- Quick access to profile and orders
- Login/Register button for guests
- User avatar icon

## 📁 New Files Created

```
lib/
├── userAuth.js          # User authentication utilities
└── orders.js            # Order management utilities

contexts/
└── UserContext.js       # User state management

app/user/
├── login/
│   └── page.jsx        # User login page
├── register/
│   └── page.jsx        # User registration page
├── profile/
│   └── page.jsx        # User profile page
└── orders/
    └── page.jsx        # Order history page
```

## 🎯 User Flow

### For New Users
1. Click "Login" in navbar
2. Click "Sign up" link
3. Fill registration form
4. Automatically logged in after registration
5. Redirected to home page

### For Existing Users
1. Click "Login" in navbar
2. Enter email and password
3. Redirected to home page
4. Access profile and orders from user menu

### Shopping & Checkout
1. Browse and add products to cart
2. Go to checkout
3. Form auto-fills with user info (if logged in)
4. Place order
5. Order saved to user's order history
6. View orders in "My Orders" page

## 🔐 Authentication System

### User Registration
```javascript
import { registerUser } from '@/lib/userAuth';

const result = registerUser({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
  phone: '+1234567890'
});

if (result.success) {
  // User registered successfully
  console.log(result.user);
}
```

### User Login
```javascript
import { loginUser } from '@/lib/userAuth';

const result = loginUser('john@example.com', 'password123');

if (result.success) {
  // User logged in successfully
  console.log(result.user);
}
```

### Check Authentication
```javascript
import { isUserAuthenticated, getCurrentUser } from '@/lib/userAuth';

if (isUserAuthenticated()) {
  const user = getCurrentUser();
  console.log('Logged in as:', user.name);
}
```

### Logout
```javascript
import { logoutUser } from '@/lib/userAuth';

logoutUser();
// User logged out
```

## 📦 Order Management

### Create Order
```javascript
import { createOrder } from '@/lib/orders';

const order = createOrder({
  userId: user.id,
  items: cartItems,
  total: 99.99,
  shippingAddress: {
    name: 'John Doe',
    address: '123 Main St',
    city: 'New York',
    zipCode: '10001'
  },
  email: 'john@example.com'
});
```

### Get User Orders
```javascript
import { getUserOrders } from '@/lib/orders';

const orders = getUserOrders(userId);
// Returns array of orders sorted by date
```

### Update Order Status
```javascript
import { updateOrderStatus } from '@/lib/orders';

updateOrderStatus(orderId, 'shipped');
// Status options: pending, processing, shipped, delivered, cancelled
```

## 🎨 UI Components

### User Dropdown Menu
Located in Navbar, shows:
- User name and email
- Profile link
- My Orders link
- Logout button

### User Pages
All user pages include:
- Navbar with user menu
- Footer
- Responsive design
- shadcn/ui components
- Loading states
- Error handling

## 🔒 Security Notes

**Current Implementation (Demo):**
- Uses localStorage for simplicity
- Passwords stored in plain text
- No server-side validation

**For Production:**
Replace with:
- JWT tokens or session cookies
- Password hashing (bcrypt)
- Server-side authentication
- HTTPS only
- CSRF protection
- Rate limiting
- Email verification
- Password reset functionality

## 📱 Pages Overview

### `/user/login`
- Email and password fields
- Link to registration
- Auto-redirect if already logged in
- Remember user session

### `/user/register`
- Full name, email, phone, password fields
- Password confirmation
- Link to login
- Validation for duplicate emails

### `/user/profile`
- View current user info
- Edit name, email, phone
- User avatar display
- Protected route (requires login)

### `/user/orders`
- List of all user orders
- Order details (items, total, status)
- Shipping address
- Order date
- Status badges
- Protected route (requires login)

## 🎯 User Context API

### Using User Context
```javascript
import { useUser } from '@/contexts/UserContext';

function MyComponent() {
  const { user, updateUser, logout, loading } = useUser();
  
  if (loading) return <div>Loading...</div>;
  
  if (!user) {
    return <div>Please login</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### User Object Structure
```javascript
{
  id: "1234567890",
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  createdAt: "2024-01-01T00:00:00.000Z"
}
```

### Order Object Structure
```javascript
{
  id: "1234567890",
  userId: "user123",
  items: [
    {
      id: 1,
      title: "Product Name",
      price: 29.99,
      quantity: 2
    }
  ],
  total: 59.98,
  status: "pending",
  shippingAddress: {
    name: "John Doe",
    address: "123 Main St",
    city: "New York",
    zipCode: "10001"
  },
  email: "john@example.com",
  createdAt: "2024-01-01T00:00:00.000Z"
}
```

## 🚀 Testing the System

### Test User Registration
1. Go to `/user/register`
2. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: +1234567890
   - Password: test123
3. Click "Create Account"
4. Should be logged in automatically

### Test User Login
1. Go to `/user/login`
2. Enter credentials:
   - Email: test@example.com
   - Password: test123
3. Click "Login"
4. Should redirect to home page

### Test Order Creation
1. Login as a user
2. Add products to cart
3. Go to checkout
4. Fill shipping info (auto-filled if logged in)
5. Place order
6. Check "My Orders" page

## 🎨 Customization

### Change User Avatar
Edit `app/user/profile/page.jsx`:
```javascript
// Replace the User icon with an image
<img 
  src={user.avatar || '/default-avatar.png'} 
  alt={user.name}
  className="w-16 h-16 rounded-full"
/>
```

### Add More User Fields
Edit `lib/userAuth.js` and registration form:
```javascript
// Add address, birthday, etc.
const newUser = {
  id: Date.now().toString(),
  ...userData,
  address: userData.address,
  birthday: userData.birthday,
  createdAt: new Date().toISOString(),
};
```

### Customize Order Status
Edit `lib/orders.js`:
```javascript
// Add more status options
const validStatuses = [
  'pending',
  'confirmed',
  'processing',
  'shipped',
  'out_for_delivery',
  'delivered',
  'cancelled',
  'refunded'
];
```

## 📊 Data Storage

All data is stored in localStorage:
- `users` - Array of all registered users
- `currentUser` - Currently logged in user
- `orders` - Array of all orders
- `cart` - Shopping cart items

### View Stored Data
Open browser console:
```javascript
// View all users
console.log(JSON.parse(localStorage.getItem('users')));

// View current user
console.log(JSON.parse(localStorage.getItem('currentUser')));

// View all orders
console.log(JSON.parse(localStorage.getItem('orders')));
```

### Clear All Data
```javascript
localStorage.clear();
// Refresh page
```

## 🔄 Migration to Backend

When ready to add a real backend:

1. **Replace localStorage with API calls**
2. **Add authentication endpoints**
   - POST /api/auth/register
   - POST /api/auth/login
   - POST /api/auth/logout
   - GET /api/auth/me

3. **Add order endpoints**
   - POST /api/orders
   - GET /api/orders
   - GET /api/orders/:id
   - PATCH /api/orders/:id

4. **Use JWT tokens**
5. **Add password hashing**
6. **Implement refresh tokens**
7. **Add email verification**

## ✨ Benefits

1. **Complete User Experience** - Registration, login, profile, orders
2. **Order Tracking** - Users can view their order history
3. **Personalization** - Auto-fill checkout with user info
4. **Better UX** - User dropdown menu in navbar
5. **Guest Checkout** - Still works without login
6. **Scalable** - Easy to migrate to real backend

---

**Your MiniShop now has a complete user authentication system! 🎉**

Users can register, login, manage their profile, and track their orders!

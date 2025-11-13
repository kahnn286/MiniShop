# MiniShop - Modern E-Commerce Web App

A full-stack e-commerce application built with Next.js 14, shadcn/ui, Tailwind CSS, and FakeStoreAPI.

## 🚀 Features

### Public Pages
- **Home Page**: Browse products with filtering by category and search
- **Product Detail Page**: View detailed product information with ratings and add to cart
- **Cart Page**: View cart items, adjust quantities, and remove products
- **Checkout Page**: Complete checkout with order creation and tracking

### User Features (`/user`) 🆕
- **Registration**: Create new user account with validation
- **Login/Logout**: Secure user authentication system
- **Profile Management**: View and edit user information (name, email, phone)
- **Order History**: Track all orders with status, items, and shipping details
- **User Menu**: Dropdown menu in navbar with quick access to profile and orders
- **Auto-fill Checkout**: User information automatically fills checkout form

### Admin Dashboard (`/admin`)
- **Login System**: Simple localStorage-based authentication
  - Username: `admin`
  - Password: `admin123`
- **Dashboard**: View statistics (total products, categories, total value, avg price)
- **Product Management**: List, add, edit, and delete products
- **Category Analytics**: Visual breakdown of products by category

### Components
- Responsive Navbar with search, cart badge, and user menu
- Footer with quick links
- ProductCard component with hover effects and animations
- Admin sidebar navigation
- Skeleton loading states
- shadcn/ui components throughout the app

### Styling & Features
- **shadcn/ui**: Professional UI component library built on Radix UI
- **Tailwind CSS**: Responsive design with modern styling
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Toast Notifications**: User feedback with shadcn toast system
- **React Query**: Data caching and optimized fetching
- **Gradient Effects**: Modern gradient text and backgrounds
- **Smooth Animations**: Hover transitions and loading states
- **Accessibility**: ARIA-compliant components from Radix UI

## � Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: shadcn/ui (Radix UI + Tailwind CSS)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Notifications**: shadcn/ui Toast
- **API**: FakeStoreAPI

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd minishop
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
minishop/
├── app/
│   ├── admin/                   # Admin dashboard
│   │   ├── login/
│   │   │   └── page.jsx        # Admin login page
│   │   ├── products/
│   │   │   └── page.jsx        # Product management
│   │   ├── layout.jsx          # Admin layout with sidebar
│   │   └── page.jsx            # Admin dashboard
│   ├── user/                    # User pages 🆕
│   │   ├── login/
│   │   │   └── page.jsx        # User login
│   │   ├── register/
│   │   │   └── page.jsx        # User registration
│   │   ├── profile/
│   │   │   └── page.jsx        # User profile
│   │   └── orders/
│   │       └── page.jsx        # Order history
│   ├── cart/
│   │   └── page.jsx            # Shopping cart page
│   ├── checkout/
│   │   └── page.jsx            # Checkout page
│   ├── product/
│   │   └── [id]/
│   │       └── page.jsx        # Product detail page
│   ├── layout.jsx              # Root layout with providers
│   ├── page.jsx                # Home page
│   └── globals.css             # Global styles with CSS variables
├── components/
│   ├── ui/                      # shadcn/ui components 🆕
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── badge.jsx
│   │   ├── dialog.jsx
│   │   ├── dropdown-menu.jsx
│   │   ├── separator.jsx
│   │   ├── skeleton.jsx
│   │   ├── table.jsx
│   │   ├── toast.jsx
│   │   ├── toaster.jsx
│   │   └── label.jsx
│   ├── AdminSidebar.jsx        # Admin navigation sidebar
│   ├── Footer.jsx              # Site footer
│   ├── Navbar.jsx              # Main navigation with user menu
│   ├── ProductCard.jsx         # Product card component
│   └── ProductSkeleton.jsx     # Loading skeleton
├── contexts/
│   ├── CartContext.js          # Cart state management
│   ├── ThemeContext.js         # Dark mode management
│   └── UserContext.js          # User state management 🆕
├── lib/
│   ├── api.js                  # FakeStoreAPI functions
│   ├── auth.js                 # Admin authentication
│   ├── userAuth.js             # User authentication 🆕
│   ├── orders.js               # Order management 🆕
│   ├── cart.js                 # Cart utilities
│   └── utils.js                # shadcn utility functions 🆕
├── hooks/
│   └── use-toast.js            # Toast hook 🆕
└── components.json             # shadcn/ui configuration 🆕
```

## 🎯 Usage

### Public Features

1. **Browse Products**: Visit the home page to see all products
2. **Filter by Category**: Click category buttons to filter products
3. **Search**: Use the search bar in the navbar
4. **View Details**: Click on any product to see full details
5. **Add to Cart**: Click the cart icon on product cards or detail page
6. **Manage Cart**: View cart, adjust quantities, or remove items
7. **Checkout**: Complete the checkout form

### User Features 🆕

1. **Register**: Go to `/user/register` or click "Login" → "Sign up"
   - Enter name, email, phone, and password
   - Automatically logged in after registration
2. **Login**: Go to `/user/login`
   - Enter email and password
   - Access user menu from navbar
3. **Profile**: Click user icon → "Profile"
   - View and edit your information
4. **Orders**: Click user icon → "My Orders"
   - View all your orders with status and details
5. **Checkout**: User info auto-fills if logged in
6. **Logout**: Click user icon → "Logout"

### Admin Features

1. **Login**: Go to `/admin/login`
   - Username: `admin`
   - Password: `admin123`
2. **View Dashboard**: See statistics and analytics
3. **Manage Products**: 
   - View all products in a table
   - Add new products
   - Edit existing products
   - Delete products (with confirmation)
4. **Logout**: Click logout in the sidebar

## 🌙 Dark Mode

Toggle dark mode using the moon/sun icon in the navbar. The preference is saved to localStorage and persists across sessions.

## 🔒 Authentication

### User Authentication 🆕
- Registration with email validation
- Login/logout functionality
- Profile management
- Order tracking
- Session persistence with localStorage

### Admin Authentication
- Simple localStorage-based authentication
- Protected admin routes

**Note**: In production, replace with proper authentication (JWT, OAuth, server-side sessions, password hashing, etc.)

## 📝 API Integration

The app uses FakeStoreAPI endpoints:
- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product
- `GET /products/categories` - Fetch categories
- `GET /products/category/:category` - Fetch products by category
- `POST /products` - Create product (mock)
- `PUT /products/:id` - Update product (mock)
- `DELETE /products/:id` - Delete product (mock)

**Note**: FakeStoreAPI returns mock responses for mutations. In production, connect to a real backend.

## 🎨 shadcn/ui Components

The app uses shadcn/ui for a professional, accessible UI:

- **Button**: Multiple variants (default, outline, ghost, destructive)
- **Card**: Structured layouts with header, content, footer
- **Input**: Form inputs with proper styling
- **Badge**: Status indicators and labels
- **Dialog**: Modal dialogs
- **Dropdown Menu**: User menu and actions
- **Separator**: Visual dividers
- **Skeleton**: Loading states
- **Table**: Data tables
- **Toast**: Notifications
- **Label**: Form labels

### Adding More Components

```bash
npx shadcn@latest add [component-name]
```

Available: accordion, alert, avatar, calendar, checkbox, command, form, popover, select, sheet, slider, switch, tabs, textarea, toggle, tooltip, and more!

## 📚 Documentation

- **SHADCN_UPGRADE.md** - Details about shadcn/ui integration
- **USER_AUTH_GUIDE.md** - Complete guide to user authentication system
- **QUICK_START.md** - Quick reference guide
- **PROJECT_SUMMARY.md** - Project overview

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 🔄 Data Storage

Currently uses localStorage for demo purposes:
- User accounts
- Shopping cart
- Orders
- Admin authentication
- Theme preference

**For production**: Replace with a real database (PostgreSQL, MongoDB, etc.) and proper backend API.

## 🎯 Key Features Highlights

✅ **Modern UI** - Professional design with shadcn/ui  
✅ **User System** - Complete authentication and profile management  
✅ **Order Tracking** - Users can view their order history  
✅ **Dark Mode** - Seamless theme switching  
✅ **Responsive** - Works on mobile, tablet, and desktop  
✅ **Accessible** - ARIA-compliant components  
✅ **Fast** - Optimized with React Query caching  
✅ **Type-safe Ready** - Can easily add TypeScript  

## 🛣️ Roadmap

Potential enhancements:
- [ ] Add TypeScript
- [ ] Integrate real payment gateway (Stripe)
- [ ] Add product reviews and ratings
- [ ] Implement wishlist functionality
- [ ] Add email notifications
- [ ] Real-time order tracking
- [ ] Admin order management
- [ ] Product inventory management
- [ ] Advanced search and filters
- [ ] Social authentication (Google, Facebook)

## 📄 License

MIT License - feel free to use this project for learning or as a template for your own projects.

## 🤝 Contributing

This is a demo project, but feel free to fork and customize it for your needs!

## 🙏 Credits

- **Next.js** - React framework
- **shadcn/ui** - UI component library
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **FakeStoreAPI** - Mock e-commerce API
- **Lucide** - Beautiful icon library

---

**Built with ❤️ using Next.js 14 and shadcn/ui**

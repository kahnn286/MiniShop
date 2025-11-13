# Quick Start Guide

## Run the Project

```bash
cd minishop
npm run dev
```

Visit: http://localhost:3000

## Admin Access

URL: http://localhost:3000/admin/login

**Credentials:**
- Username: `admin`
- Password: `admin123`

## Key Features to Test

### Public Site
1. ✅ Browse products on home page
2. ✅ Filter by category (electronics, jewelery, men's clothing, women's clothing)
3. ✅ Search products using navbar search
4. ✅ Click product to view details
5. ✅ Add products to cart
6. ✅ View cart and adjust quantities
7. ✅ Complete checkout (simulated)
8. ✅ Toggle dark mode (moon/sun icon)

### Admin Dashboard
1. ✅ Login with credentials above
2. ✅ View dashboard statistics
3. ✅ Navigate to Products page
4. ✅ Add new product
5. ✅ Edit existing product
6. ✅ Delete product
7. ✅ Logout

## Project Structure Overview

```
app/
├── page.js              → Home page with products
├── product/[id]/        → Product detail page
├── cart/                → Shopping cart
├── checkout/            → Checkout form
└── admin/               → Admin panel
    ├── login/           → Admin login
    ├── page.js          → Dashboard
    └── products/        → Product management

components/              → Reusable UI components
contexts/                → React Context (Theme, Cart)
lib/                     → Utilities (API, Auth, Cart)
```

## Technologies Used

- Next.js 14 (App Router)
- Tailwind CSS
- React Query (TanStack Query)
- Axios
- React Hot Toast
- Lucide React Icons
- FakeStoreAPI

## Notes

- Cart data is stored in localStorage
- Admin auth is localStorage-based (demo only)
- FakeStoreAPI returns mock responses for create/update/delete
- Dark mode preference is saved to localStorage
- All images are loaded from FakeStoreAPI

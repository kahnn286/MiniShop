// Simple mock authentication
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

export const login = (username, password) => {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    localStorage.setItem('isAdminLoggedIn', 'true');
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('isAdminLoggedIn');
};

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('isAdminLoggedIn') === 'true';
};

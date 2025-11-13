// User authentication utilities
export const registerUser = (userData) => {
  if (typeof window === 'undefined') return false;
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Check if user already exists
  if (users.find(u => u.email === userData.email)) {
    return { success: false, message: 'User already exists' };
  }
  
  const newUser = {
    id: Date.now().toString(),
    ...userData,
    createdAt: new Date().toISOString(),
  };
  
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  return { success: true, user: newUser };
};

export const loginUser = (email, password) => {
  if (typeof window === 'undefined') return false;
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    const { password, ...userWithoutPassword } = user;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    return { success: true, user: userWithoutPassword };
  }
  
  return { success: false, message: 'Invalid credentials' };
};

export const logoutUser = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

export const isUserAuthenticated = () => {
  return getCurrentUser() !== null;
};

export const updateUserProfile = (userData) => {
  if (typeof window === 'undefined') return false;
  
  const currentUser = getCurrentUser();
  if (!currentUser) return false;
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const userIndex = users.findIndex(u => u.id === currentUser.id);
  
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...userData };
    localStorage.setItem('users', JSON.stringify(users));
    
    const { password, ...userWithoutPassword } = users[userIndex];
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    
    return { success: true, user: userWithoutPassword };
  }
  
  return { success: false, message: 'User not found' };
};

// Order management utilities
export const createOrder = (orderData) => {
  if (typeof window === 'undefined') return null;
  
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  
  const newOrder = {
    id: Date.now().toString(),
    ...orderData,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  
  orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  return newOrder;
};

export const getUserOrders = (userId) => {
  if (typeof window === 'undefined') return [];
  
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  return orders.filter(order => order.userId === userId).sort((a, b) => 
    new Date(b.createdAt) - new Date(a.createdAt)
  );
};

export const getOrderById = (orderId) => {
  if (typeof window === 'undefined') return null;
  
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  return orders.find(order => order.id === orderId);
};

export const updateOrderStatus = (orderId, status) => {
  if (typeof window === 'undefined') return false;
  
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const orderIndex = orders.findIndex(order => order.id === orderId);
  
  if (orderIndex !== -1) {
    orders[orderIndex].status = status;
    orders[orderIndex].updatedAt = new Date().toISOString();
    localStorage.setItem('orders', JSON.stringify(orders));
    return true;
  }
  
  return false;
};

export const getAllOrders = () => {
  if (typeof window === 'undefined') return [];
  
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  return orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

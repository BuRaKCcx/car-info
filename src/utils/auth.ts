export const setCurrentUser = (user: any) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  } catch {
    return {};
  }
};

export const clearCurrentUser = () => {
  localStorage.removeItem('currentUser');
};

export const validateUser = (email: string, password: string) => {
  try {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find((u: any) => u.email === email && u.password === password);
  } catch {
    return null;
  }
};

export const isAuthenticated = () => {
  const user = getCurrentUser();
  return !!user?.name;
};
import { create } from 'zustand';

export type UserRole = 'admin' | 'tutor' | 'student' | 'parent';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (_email, _password, role) => {
    set({
      user: {
        id: '1',
        name: role === 'admin' ? 'Admin User' : role === 'tutor' ? 'Sarah Johnson' : role === 'parent' ? 'Mark Williams' : 'Alex Chen',
        email: _email,
        role,
        avatar: undefined,
      },
      isAuthenticated: true,
    });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));

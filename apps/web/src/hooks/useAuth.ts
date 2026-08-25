import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import { useAuthStore } from '../stores/authStore';
import type { AuthTokens } from '../types/auth';

export function useAuth() {
  const { user, isAuthenticated, isLoading, setUser, setLoading, logout } =
    useAuthStore();
  const navigate = useNavigate();

  // On first load, if we have a token, try to fetch the current user.
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get('/auth/me')
      .then(({ data }) => setUser(data))
      .catch(() => {
        logout();
        setLoading(false);
      });
  }, []);

  async function login(email: string, password: string) {
    const { data } = await api.post<AuthTokens>('/auth/login', {
      email,
      password,
    });
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);

    const { data: me } = await api.get('/auth/me');
    setUser(me);
    navigate('/dashboard');
  }

  async function register(email: string, password: string, name?: string) {
    const { data } = await api.post<AuthTokens>('/auth/register', {
      email,
      password,
      name,
    });
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);

    const { data: me } = await api.get('/auth/me');
    setUser(me);
    navigate('/dashboard');
  }

  function signOut() {
    logout();
    navigate('/login');
  }

  return { user, isAuthenticated, isLoading, login, register, signOut };
}
import axios from 'axios';
import { baseApiUrl } from '@/global';

export function request() {
  const headers = {};

  if ('auth-token' in localStorage) {
    headers['authorization'] = `Bearer ${localStorage.getItem('auth-token')}`;
  }

  return axios.create({
    headers,
    baseURL: baseApiUrl,
  });
}

import axios from 'axios';
import { baseApiUrl } from '@/global';

export function request() {
  const headers = {};

  const user = localStorage.getItem('__lgpd');
  if (user) {
    const userParsed = JSON.parse(user);
    headers['authorization'] = `Bearer ${userParsed.token}`;
  }

  return axios.create({
    headers,
    baseURL: baseApiUrl,
  });
}

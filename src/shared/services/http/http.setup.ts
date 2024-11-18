import axios from 'axios';
import { applyInterceptors } from './http.interceptor';

export const http = applyInterceptors(axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL }));

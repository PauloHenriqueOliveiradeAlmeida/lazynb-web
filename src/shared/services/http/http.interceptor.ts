import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { CookieService } from '../storage/cookie/cookie.service';

const cookieService = new CookieService();

function onRequest(config: InternalAxiosRequestConfig) {
	const accessToken = cookieService.get('access_token');

	if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

	return config;
}

export function applyInterceptors(httpInstance: AxiosInstance) {
	httpInstance.interceptors.request.use(onRequest);

	return httpInstance;
}

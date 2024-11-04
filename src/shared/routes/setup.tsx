import { BrowserRouter } from 'react-router-dom';
import { AuthRoute } from './auth.route';
import { useAuthenticationContext } from '../contexts/authentication/authentication.hook';
import { AppRoute } from './app.route';

export function Router() {
	const {
		states: { isAuthenticated },
	} = useAuthenticationContext();
	return <BrowserRouter>{!isAuthenticated ? <AuthRoute /> : <AppRoute />}</BrowserRouter>;
}

import { CookieService } from '@/shared/services/storage/cookie/cookie.service';
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { IAuthenticationContext } from './authentication.interface';

interface AuthenticationProviderProps {
	children: ReactNode;
}

export const AuthenticationContext = createContext({} as IAuthenticationContext);
export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
	const cookieService = useMemo(() => new CookieService(), []);
	const [isAuthenticated, setIsAuthenticated] = useState(!!cookieService.get('access_token'));
	const authenticate = useCallback(
		(accessToken: string) => {
			cookieService.create('access_token', accessToken);
			setIsAuthenticated(true);
		},
		[cookieService],
	);

	const deauthenticate = useCallback(() => {
		cookieService.remove('access_token');
		setIsAuthenticated(false);
	}, [cookieService]);

	const authenticationProviderValues = useMemo(
		() => ({
			states: {
				isAuthenticated,
			},
			handlers: {
				authenticate,
				deauthenticate,
			},
		}),
		[isAuthenticated, authenticate, deauthenticate],
	);

	return (
		<AuthenticationContext.Provider value={authenticationProviderValues}>{children}</AuthenticationContext.Provider>
	);
}

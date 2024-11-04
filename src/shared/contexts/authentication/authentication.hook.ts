import { useContext } from 'react';
import { AuthenticationContext } from './authentication.context';

export function useAuthenticationContext() {
	return useContext(AuthenticationContext);
}

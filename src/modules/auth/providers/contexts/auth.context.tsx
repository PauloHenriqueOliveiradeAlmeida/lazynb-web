import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { IAuthContext, IFirstAccessInformations } from './auth.interface';

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export function AuthProvider({ children }: AuthProviderProps) {
	const [authPageTitle, setAuthPageTitle] = useState<string>('');
	const [firstAccessInformations, setFirstAccessInformations] = useState<IFirstAccessInformations>(
		{} as IFirstAccessInformations,
	);

	const handleSetFirstAccessInformations = useCallback((key: keyof IFirstAccessInformations, value: string) => {
		setFirstAccessInformations((prevState) => ({ ...prevState, [key]: value }));
	}, []);

	const authProviderValues = useMemo(
		() => ({
			states: {
				authPageTitle,
				firstAccessInformations,
			},
			handlers: {
				setAuthPageTitle,
				handleSetFirstAccessInformations,
			},
		}),
		[authPageTitle, setAuthPageTitle, firstAccessInformations, handleSetFirstAccessInformations],
	);

	return <AuthContext.Provider value={authProviderValues}>{children}</AuthContext.Provider>;
}

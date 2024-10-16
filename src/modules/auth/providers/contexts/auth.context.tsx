import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';

interface IAuthContext {
	states: {
		authPageTitle: string;
	};
	handlers: {
		setAuthPageTitle: Dispatch<SetStateAction<string>>;
	};
}

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export function AuthProvider({ children }: AuthProviderProps) {
	const [authPageTitle, setAuthPageTitle] = useState<string>('');

	const authProviderValues = useMemo(
		() => ({
			states: {
				authPageTitle,
			},
			handlers: {
				setAuthPageTitle,
			},
		}),
		[authPageTitle, setAuthPageTitle],
	);

	return <AuthContext.Provider value={authProviderValues}>{children}</AuthContext.Provider>;
}

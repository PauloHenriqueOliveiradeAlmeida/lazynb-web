import { ReactNode, useMemo, createContext, useState } from 'react';
import { IFirstAccessContext } from './first-access.interface';

interface FirstAccessProviderProps {
	children: ReactNode;
}

export const FirstAccessContext = createContext<IFirstAccessContext>({} as IFirstAccessContext);
export function FirstAccessProvider({ children }: FirstAccessProviderProps) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const authProviderValues = useMemo(
		() => ({
			states: { email, password, confirmPassword },
			handlers: { setEmail, setPassword, setConfirmPassword },
		}),
		[email, setEmail, password, setPassword, confirmPassword, setConfirmPassword],
	);

	return <FirstAccessContext.Provider value={authProviderValues}>{children}</FirstAccessContext.Provider>;
}

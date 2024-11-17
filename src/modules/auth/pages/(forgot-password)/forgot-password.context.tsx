import { ReactNode, useMemo, useState, createContext } from 'react';
import { IForgotPasswordContext } from './forgot-password.interface';

interface ForgotPasswordProviderProps {
	children: ReactNode;
}

export const ForgotPasswordContext = createContext<IForgotPasswordContext>({} as IForgotPasswordContext);
export function ForgotPasswordProvider({ children }: ForgotPasswordProviderProps) {
	const [email, setEmail] = useState('');
	const [verificationCode, setVerificationCode] = useState('');

	const authProviderValues = useMemo(
		() => ({
			states: { email, verificationCode },
			handlers: { setEmail, setVerificationCode },
		}),
		[email, setEmail, verificationCode, setVerificationCode],
	);

	return <ForgotPasswordContext.Provider value={authProviderValues}>{children}</ForgotPasswordContext.Provider>;
}

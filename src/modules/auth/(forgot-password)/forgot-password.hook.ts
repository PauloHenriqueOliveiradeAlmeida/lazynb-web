import { useContext } from 'react';
import { ForgotPasswordContext } from './forgot-password.context';

export function useForgotPasswordContext() {
	return useContext(ForgotPasswordContext);
}

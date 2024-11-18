import { Dispatch, SetStateAction } from 'react';

export interface IFirstAccessContext {
	states: {
		email: string;
		password: string;
		confirmPassword: string;
	};
	handlers: {
		setEmail: Dispatch<SetStateAction<string>>;
		setPassword: Dispatch<SetStateAction<string>>;
		setConfirmPassword: Dispatch<SetStateAction<string>>;
	};
}

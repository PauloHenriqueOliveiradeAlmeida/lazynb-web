import { Dispatch, SetStateAction } from 'react';

export interface IAuthContext {
	states: {
		authPageTitle: string;
	};
	handlers: {
		setAuthPageTitle: Dispatch<SetStateAction<string>>;
	};
}

export interface IFirstAccessInformations {
	email: string;
	password: string;
	confirmPassword: string;
	verificationCode: string;
}

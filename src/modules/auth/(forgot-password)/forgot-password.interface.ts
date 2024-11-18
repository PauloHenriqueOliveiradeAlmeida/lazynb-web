import { Dispatch, SetStateAction } from 'react';

export interface IForgotPasswordContext {
	states: {
		email: string;
		verificationCode: string;
	};
	handlers: {
		setEmail: Dispatch<SetStateAction<string>>;
		setVerificationCode: Dispatch<SetStateAction<string>>;
	};
}

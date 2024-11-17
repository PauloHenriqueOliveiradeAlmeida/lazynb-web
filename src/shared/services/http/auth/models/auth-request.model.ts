export interface ILoginRequestModel {
	email: string;
	password: string;
}

export interface IFirstAccessRequestModel {
	email: string;
	password: string;
	confirmPassword: string;
	verificationCode: string;
}

export interface IResetPasswordRequestModel {
	email: string;
	password: string;
	confirmPassword: string;
	verificationCode: string;
}

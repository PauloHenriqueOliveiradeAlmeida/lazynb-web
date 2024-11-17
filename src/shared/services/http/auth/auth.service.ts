import { http } from '../http.setup';
import { IFirstAccessRequestModel, ILoginRequestModel, IResetPasswordRequestModel } from './models/auth-request.model';
import { IBaseResponseModel, ILoginResponseModel } from './models/auth-response.model';

export class AuthService {
	async login(data: ILoginRequestModel) {
		return await http.post<ILoginResponseModel>('/auth/login', data);
	}

	async sendFirstAccessEmail(email: string) {
		return await http.post<IBaseResponseModel>('/auth/send-first-access-email', { email });
	}

	async firstAccess(data: IFirstAccessRequestModel) {
		return await http.post<IBaseResponseModel>('/auth/first-access', data);
	}

	async sendResetPasswordEmail(email: string) {
		return await http.post<IBaseResponseModel>('/auth/send-reset-password-email', { email });
	}

	async verifyResetPasswordCode(email: string, verificationCode: string) {
		return await http.post<IBaseResponseModel>('/auth/verify-reset-password-code', { email, verificationCode });
	}

	async resetPassword(data: IResetPasswordRequestModel) {
		return await http.post<IBaseResponseModel>('/auth/reset-password', data);
	}
}

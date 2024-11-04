import { http } from '../http.setup';
import { ILoginRequestModel } from './models/auth-request.model';
import { ILoginResponseModel } from './models/auth-response.model';

export class AuthService {
	async login(data: ILoginRequestModel) {
		return await http.post<ILoginResponseModel>('/auth/login', data);
	}
}

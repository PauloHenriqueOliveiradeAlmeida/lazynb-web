import { http } from '../http.setup';
import { ICreateClientRequestModel } from './models/client-request.model';
import { IBaseResponseModel, IGetClientResponseModel } from './models/client-response.model';

export class ClientService {
	async create(data: ICreateClientRequestModel) {
		return http.post<IBaseResponseModel>('/clients', data);
	}

	async update(id: string, data: Partial<ICreateClientRequestModel>) {
		return http.put<IBaseResponseModel>(`/clients/${id}`, data);
	}

	async delete(id: string) {
		return http.delete<IBaseResponseModel>(`/clients/${id}`);
	}

	async get(id: string) {
		return http.get<IGetClientResponseModel>(`/clients/${id}`);
	}

	async getAll() {
		return http.get<IGetClientResponseModel[]>('/clients');
	}
}

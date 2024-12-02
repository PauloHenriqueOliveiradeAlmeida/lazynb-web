import { http } from '../http.setup';
import { ICreatePropertyRequestModel } from './models/property-request.model';
import {
	IBaseResponseModel,
	IGetAddressByCepResponseModel,
	IGetPropertyResponseModel,
} from './models/property-response.model';

export class PropertyService {
	async create(data: ICreatePropertyRequestModel) {
		return http.post<IBaseResponseModel>('/properties', data);
	}

	async update(id: string, data: Partial<ICreatePropertyRequestModel>) {
		return http.put<IBaseResponseModel>(`/properties/${id}`, data);
	}

	async delete(id: string) {
		return http.delete<IBaseResponseModel>(`/properties/${id}`);
	}

	async get(id: string) {
		return http.get<IGetPropertyResponseModel>(`/properties/${id}`);
	}

	async getAll() {
		return http.get<IGetPropertyResponseModel[]>('/properties');
	}

	async getAddressByCep(cep: string) {
		return http.get<IGetAddressByCepResponseModel>(`/properties/${cep}/address`);
	}
}

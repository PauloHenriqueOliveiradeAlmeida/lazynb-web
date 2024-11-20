import { http } from '../http.setup';
import { ICreateCollaboratorRequestModel } from './models/collaborator-request.model';
import { IBaseResponseModel, IGetCollaboratorResponseModel } from './models/collaborator-response.model';

export class CollaboratorService {
	async create(data: ICreateCollaboratorRequestModel) {
		return http.post<IBaseResponseModel>('/collaborators', data);
	}

	async update(id: string, data: Partial<ICreateCollaboratorRequestModel>) {
		return http.put<IBaseResponseModel>(`/collaborators/${id}`, data);
	}

	async delete(id: string) {
		return http.delete<IBaseResponseModel>(`/collaborators/${id}`);
	}

	async get(id: string) {
		return http.get<IGetCollaboratorResponseModel>(`/collaborators/${id}`);
	}

	async getAll() {
		return http.get<IGetCollaboratorResponseModel[]>('/collaborators');
	}
}

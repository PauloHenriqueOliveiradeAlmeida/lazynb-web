import { http } from '../http.setup';
import { ICollaboratorCreateRequestModel } from './models/create/create-request.model';
import { ICollaboratorCreateResponseModel } from './models/create/create-response.model';

export class CollaboratorService {
	async create(data: ICollaboratorCreateRequestModel) {
		return await http.post<ICollaboratorCreateResponseModel>('/collaborators', data);
	}
}

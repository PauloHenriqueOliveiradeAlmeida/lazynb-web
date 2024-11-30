import { http } from '../http.setup';
import { ICreateAmenityRequestModel } from './models/amenity-request.model';
import { IBaseResponseModel, IGetAmenityResponseModel } from './models/amenity-response.model';

export class AmenityService {
	async create(data: ICreateAmenityRequestModel) {
		return http.post<IBaseResponseModel>('/amenities', data);
	}
	async get() {
		return http.get<IGetAmenityResponseModel[]>('/amenities');
	}
}

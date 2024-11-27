import { UfEnum } from '@/shared/enums/uf.enum';

export interface IBaseResponseModel {
	message: string;
}

export interface IGetPropertyResponseModel {
	id: string;
	name: string;
	cep: string;
	neighborhood: string;
	address_number: number;
	complement?: string;
	city: string;
	uf: UfEnum;
	description: string;
	clientid: string;
	cpf: string;
	client_name: string;
	amenities: number[];
}

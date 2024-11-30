export interface IBaseResponseModel {
	message: string;
}

export interface IGetClientResponseModel {
	id: number;
	name: string;
	email: string;
	phone_number: string;
	cpf: string;
}

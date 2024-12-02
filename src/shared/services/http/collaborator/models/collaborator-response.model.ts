export interface IBaseResponseModel {
	message: string;
}

export interface IGetCollaboratorResponseModel {
	id: string;
	name: string;
	cpf: string;
	email: string;
	phone_number: string;
	is_admin: boolean;
}

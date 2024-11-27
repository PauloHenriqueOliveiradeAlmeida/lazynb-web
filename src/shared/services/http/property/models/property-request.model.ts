export interface ICreatePropertyRequestModel {
	name: string;
	cep: string;
	neighborhood: string;
	address_number: number;
	complement?: string;
	city: string;
	uf: string;
	description: string;
	clientid: number;
	amenities?: number[];
}

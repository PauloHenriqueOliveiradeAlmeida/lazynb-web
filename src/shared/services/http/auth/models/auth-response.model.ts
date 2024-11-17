export interface IBaseResponseModel {
	message: string;
}

export interface ILoginResponseModel extends IBaseResponseModel {
	accessToken: string;
}

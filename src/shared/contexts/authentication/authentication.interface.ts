export interface IAuthenticationContext {
	states: {
		isAuthenticated: boolean;
	};
	handlers: {
		authenticate: (accessToken: string) => void;
		deauthenticate: () => void;
	};
}

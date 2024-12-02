import { Dispatch, SetStateAction } from 'react';

export interface IBaseContext {
	states: {
		isLoading: boolean;
	};
	handlers: {
		setIsLoading: Dispatch<SetStateAction<boolean>>;
	};
}

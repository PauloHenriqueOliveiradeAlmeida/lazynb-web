import { Dispatch, SetStateAction } from 'react';

export interface IFormContext {
	states: {
		formPageTitle: string;
	};
	handlers: {
		setFormPageTitle: Dispatch<SetStateAction<string>>;
	};
}

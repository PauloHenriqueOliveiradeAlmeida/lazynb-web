import { createContext, ReactNode, useMemo, useState } from 'react';
import { IFormContext } from './form.interface';

interface FormProviderProps {
	children: ReactNode;
}

export const FormContext = createContext<IFormContext>({} as IFormContext);
export function FormProvider({ children }: FormProviderProps) {
	const [formPageTitle, setFormPageTitle] = useState<string>('');
	const formProviderValues = useMemo(
		() => ({
			states: {
				formPageTitle,
			},
			handlers: {
				setFormPageTitle,
			},
		}),
		[formPageTitle, setFormPageTitle],
	);

	return <FormContext.Provider value={formProviderValues}>{children}</FormContext.Provider>;
}

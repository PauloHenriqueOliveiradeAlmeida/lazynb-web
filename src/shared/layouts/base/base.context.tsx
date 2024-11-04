import { createContext, ReactNode, useMemo, useState } from 'react';
import { IBaseContext } from './base.interface';

interface BaseProviderProps {
	children: ReactNode;
}

export const BaseContext = createContext<IBaseContext>({} as IBaseContext);
export function BaseProvider({ children }: BaseProviderProps) {
	const [isLoading, setIsLoading] = useState(false);
	const baseProviderValues = useMemo(
		() => ({
			states: {
				isLoading,
			},
			handlers: {
				setIsLoading,
			},
		}),
		[isLoading, setIsLoading],
	);

	return <BaseContext.Provider value={baseProviderValues}>{children}</BaseContext.Provider>;
}

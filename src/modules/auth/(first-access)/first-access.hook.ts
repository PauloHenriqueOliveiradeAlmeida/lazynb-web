import { useContext } from 'react';
import { FirstAccessContext } from './first-access.context';

export function useFirstAccessContext() {
	return useContext(FirstAccessContext);
}

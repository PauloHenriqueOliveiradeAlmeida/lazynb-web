import { useContext } from 'react';
import { BaseContext } from './base.context';

export function useBaseContext() {
	return useContext(BaseContext);
}

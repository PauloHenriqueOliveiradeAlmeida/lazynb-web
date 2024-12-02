import { useContext } from 'react';
import { FormContext } from './form.context';

export function useFormContext() {
	return useContext(FormContext);
}

import { unmask } from './unmask';

export const cepMask = (cep: string) => {
	const cepLength = unmask(cep).length;
	if (cepLength > 2 && cepLength <= 5) return unmask(cep).replace(/(\d{2})([0-9]+)/g, '$1.$2');
	if (cepLength > 6) return unmask(cep).replace(/(\d{2})(\d{3})([0-9]+)/g, '$1.$2-$3');

	return unmask(cep);
};

import { unmask } from './unmask';

export const cpfMask = (cpf: string) => {
	const cpfLength = unmask(cpf).length;
	if (cpfLength > 3 && cpfLength <= 6) return unmask(cpf).replace(/(\d{3})([0-9]+)/g, '$1.$2');
	if (cpfLength > 6 && cpfLength <= 9) return unmask(cpf).replace(/(\d{3})(\d{3})([0-9]+)/g, '$1.$2.$3');

	if (cpfLength > 9) return unmask(cpf).replace(/(\d{3})(\d{3})(\d{3})([0-9]+)/g, '$1.$2.$3-$4');

	return unmask(cpf);
};

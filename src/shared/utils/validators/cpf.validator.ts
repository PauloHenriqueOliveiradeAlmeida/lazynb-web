export const isValidCpf = (cpf: string) => {
	if (cpf.length !== 11) return false;

	if (/(\d)\1{10}/g.test(cpf)) return false;

	for (let t = 9; t < 11; t++) {
		let sum = 0;
		for (let i = 0; i < t; i++) {
			sum += +cpf[i] * (t + 1 - i);
		}
		const digit = ((10 * sum) % 11) % 10;
		if (+cpf[t] !== digit) {
			return false;
		}
	}

	return true;
};

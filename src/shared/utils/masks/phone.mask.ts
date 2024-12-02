import { unmask } from './unmask';

export const phoneMask = (phoneNumber: string) => {
	const phoneNumberLength = unmask(phoneNumber).length;
	if (phoneNumberLength > 2 && phoneNumberLength <= 7)
		return unmask(phoneNumber).replace(/(\d{2})([0-9]+)/g, '($1) $2');
	if (phoneNumberLength > 7 && phoneNumberLength <= 10)
		return unmask(phoneNumber).replace(/(\d{2})(\d{5})([0-9]+)/g, '($1) $2-$3');

	if (phoneNumberLength === 11) return unmask(phoneNumber).replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');

	return unmask(phoneNumber);
};

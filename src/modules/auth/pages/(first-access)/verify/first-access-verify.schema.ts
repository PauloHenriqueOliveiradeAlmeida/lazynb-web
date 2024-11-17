import { z as Zod } from 'zod';

export const FirstAccessVerifySchema = Zod.object({
	verificationCode: Zod.string({ message: 'Deve ser um texto válido' })
		.length(6, 'Deve conter 6 caracteres')
		.refine((value) => /^\d+$/.test(value), 'Deve conter apenas números'),
});

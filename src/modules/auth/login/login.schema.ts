import { z as Zod } from 'zod';

export const LoginSchema = Zod.object({
	email: Zod.string({ message: 'Deve ser um texto válido' }).email({ message: 'Deve ser um email válido' }),
	password: Zod.string({ message: 'Deve ser um texto válido' }).max(30, {
		message: 'Deve ter no máximo 30 caracteres',
	}),
});

import { z as Zod } from 'zod';

export const ForgotPasswordRegistrySchema = Zod.object({
	password: Zod.string({ message: 'Deve ser um texto válido' }).refine(
		(value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(value),
		{ message: 'Senha fraca' },
	),
	confirmPassword: Zod.string({ message: 'Deve ser um texto válido' }),
}).refine((values) => values.password === values.confirmPassword, {
	message: 'As senhas não coincidem',
	path: ['confirmPassword'],
});

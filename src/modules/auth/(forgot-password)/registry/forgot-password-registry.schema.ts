import { isValidPassword } from '@/shared/utils/validators/password.validator';
import { z as Zod } from 'zod';

export const ForgotPasswordRegistrySchema = Zod.object({
	password: Zod.string({ message: 'Deve ser um texto válido' }).refine(isValidPassword, {
		message: 'Senha fraca',
	}),
	confirmPassword: Zod.string({ message: 'Deve ser um texto válido' }),
}).refine((values) => values.password === values.confirmPassword, {
	message: 'As senhas não coincidem',
});

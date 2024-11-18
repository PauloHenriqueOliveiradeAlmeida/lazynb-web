import { z as Zod } from 'zod';

export const ForgotPasswordSendSchema = Zod.object({
	email: Zod.string({ message: 'Deve ser um texto válido' }).email({ message: 'Deve ser um email válido' }),
});

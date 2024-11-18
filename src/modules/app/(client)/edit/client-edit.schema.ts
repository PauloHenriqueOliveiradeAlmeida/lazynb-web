import { unmask } from '@/shared/utils/masks/unmask';
import { isValidCpf } from '@/shared/utils/validators/cpf.validator';
import { isValidPhoneNumber } from '@/shared/utils/validators/phone-number.validator';
import { z as Zod } from 'zod';

export const ClientEditSchema = Zod.object({
	name: Zod.string({ message: 'Deve ser um texto válido' })
		.min(3, { message: 'Deve ter pelo menos 3 caracteres' })
		.max(100, {
			message: 'Deve ter no máximo 100 caracteres',
		}),
	cpf: Zod.string({ message: 'Deve ser um texto válido' })
		.transform(unmask)
		.refine(isValidCpf, { message: 'CPF inválido' }),
	email: Zod.string({ message: 'Deve ser um texto válido' }).email({ message: 'Deve ser um email válido' }),
	phone_number: Zod.string({ message: 'Deve ser um texto válido' }).transform(unmask).refine(isValidPhoneNumber, {
		message: 'Telefone inválido',
	}),
});

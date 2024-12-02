import { UfEnum } from '@/shared/enums/uf.enum';
import { unmask } from '@/shared/utils/masks/unmask';
import { z as Zod } from 'zod';

export const PropertyEditSchema = Zod.object({
	name: Zod.string({ message: 'Deve ser um texto válido' })
		.min(3, { message: 'Deve ter pelo menos 3 caracteres' })
		.max(100, {
			message: 'Deve ter no máximo 100 caracteres',
		}),
	cep: Zod.string({ message: 'Deve ser um texto válido' })
		.transform(unmask)
		.refine((cep) => cep.length === 8, {
			message: 'Deve ter no máximo 8 caracteres',
		}),

	neighborhood: Zod.string({ message: 'Deve ser um texto válido' })
		.min(3, { message: 'Deve ter pelo menos 3 caracteres' })
		.max(100, {
			message: 'Deve ter no máximo 100 caracteres',
		}),
	address_number: Zod.number({ message: 'Deve ser um número' }),
	complement: Zod.string({ message: 'Deve ser um texto válido' })
		.min(3, { message: 'Deve ter pelo menos 3 caracteres' })
		.max(100, {
			message: 'Deve ter no máximo 100 caracteres',
		})
		.optional(),
	city: Zod.string({ message: 'Deve ser um texto válido' })
		.min(1, { message: 'Deve ter pelo menos 1 caractere' })
		.max(100, {
			message: 'Deve ter no máximo 100 caracteres',
		}),
	uf: Zod.nativeEnum(UfEnum, { message: 'Deve ser um estado válido' }),
	description: Zod.string({ message: 'Deve ser um texto válido' })
		.min(3, { message: 'Deve ter pelo menos 3 caracteres' })
		.max(300, {
			message: 'Deve ter no máximo 300 caracteres',
		}),
	clientid: Zod.number({ message: 'Deve ser um número válido' }),
	amenities: Zod.array(Zod.number({ message: 'Deve ser um número válido.' })).optional(),
});

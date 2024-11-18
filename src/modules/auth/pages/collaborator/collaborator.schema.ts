import { z as Zod } from 'zod';

export const CollaboratorSchema = Zod.object({
	name: Zod.string(),
	cpf: Zod.string(),
	phone_number: Zod.string(),
	email: Zod.string(),
	password: Zod.string(),
	is_admin: Zod.boolean(),
});


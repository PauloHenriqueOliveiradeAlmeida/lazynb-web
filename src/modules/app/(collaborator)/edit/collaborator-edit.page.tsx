import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { Button } from '@/shared/components/button/button.component';
import { Input } from '@/shared/components/input/input.component';
import { useFormContext } from '@/shared/layouts/form/form.hook';
import { cpfMask } from '@/shared/utils/masks/cpf.mask';
import { phoneMask } from '@/shared/utils/masks/phone.mask';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { CollaboratorEditSchema } from './collaborator-edit.schema';
import { useCollaboratorEdit } from './collaborator-edit.hook';
import { Checkbox } from '@/shared/components/checkbox/checkbox.component';

export function CollaboratorEditPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	setFormPageTitle('Editar collaborator');

	const {
		states: { collaborator },
		handlers: { handleSubmit },
	} = useCollaboratorEdit();
	return (
		<main className='w-96'>
			<Formik
				initialValues={{
					name: collaborator?.name || '',
					cpf: collaborator?.cpf || '',
					email: collaborator?.email || '',
					phone_number: collaborator?.phone_number || '',
					is_admin: !!collaborator?.is_admin,
				}}
				validationSchema={toFormikValidationSchema(CollaboratorEditSchema)}
				validateOnChange
				enableReinitialize
				onSubmit={handleSubmit}
			>
				<Form className='flex flex-col gap-16'>
					<Input name='name' placeholder='Nome' />
					<Input name='cpf' placeholder='CPF' format={cpfMask} maxLength={14} />
					<Input name='email' placeholder='Email' />
					<Input name='phone_number' placeholder='Telefone' format={phoneMask} />
					<Checkbox name='is_admin' label='Administrador' />
					<div className='flex justify-around items-center gap-4'>
						<ButtonLink label='Voltar' variant='outlined' fullWidth to='/collaborator/report' />
						<Button label='Cadastrar' variant='filled' fullWidth />
					</div>
				</Form>
			</Formik>
		</main>
	);
}

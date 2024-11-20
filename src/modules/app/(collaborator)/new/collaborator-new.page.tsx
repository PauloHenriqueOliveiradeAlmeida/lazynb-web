import { useFormContext } from '@/shared/layouts/form/form.hook';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { CollaboratorNewSchema } from './collaborator-new.schema';
import { Input } from '@/shared/components/input/input.component';
import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { Button } from '@/shared/components/button/button.component';
import { phoneMask } from '@/shared/utils/masks/phone.mask';
import { cpfMask } from '@/shared/utils/masks/cpf.mask';
import { useCollaboratorNew } from './collaborator-new.hook';
import { Checkbox } from '@/shared/components/checkbox/checkbox.component';

export function CollaboratorNewPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	setFormPageTitle('Cadastrar colaborator');

	const {
		handlers: { handleSubmit },
	} = useCollaboratorNew();

	return (
		<main className='w-96'>
			<Formik
				initialValues={{ name: '', cpf: '', email: '', phone_number: '', is_admin: false }}
				validationSchema={toFormikValidationSchema(CollaboratorNewSchema)}
				validateOnChange
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

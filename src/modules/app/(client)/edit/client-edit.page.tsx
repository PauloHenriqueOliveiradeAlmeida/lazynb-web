import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { Button } from '@/shared/components/button/button.component';
import { Input } from '@/shared/components/input/input.component';
import { useFormContext } from '@/shared/layouts/form/form.hook';
import { cpfMask } from '@/shared/utils/masks/cpf.mask';
import { phoneMask } from '@/shared/utils/masks/phone.mask';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ClientEditSchema } from './client-edit.schema';
import { useClientEdit } from './client-edit.hook';

export function ClientEditPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	setFormPageTitle('Editar cliente');

	const {
		states: { client },
		handlers: { handleSubmit },
	} = useClientEdit();

	return (
		<main className='w-96'>
			<Formik
				initialValues={{
					name: client?.name || '',
					cpf: client?.cpf || '',
					email: client?.email || '',
					phone_number: client?.phone_number || '',
				}}
				validationSchema={toFormikValidationSchema(ClientEditSchema)}
				validateOnChange
				enableReinitialize
				onSubmit={handleSubmit}
			>
				<Form className='flex flex-col gap-16'>
					<Input name='name' placeholder='Nome' />
					<Input name='cpf' placeholder='CPF' format={cpfMask} maxLength={14} />
					<Input name='email' placeholder='Email' />
					<Input name='phone_number' placeholder='Telefone' format={phoneMask} />
					<div className='flex justify-around items-center gap-4'>
						<ButtonLink label='Voltar' variant='outlined' fullWidth to='/client/report' />
						<Button label='Cadastrar' variant='filled' fullWidth />
					</div>
				</Form>
			</Formik>
		</main>
	);
}

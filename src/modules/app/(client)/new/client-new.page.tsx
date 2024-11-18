import { Button } from '@/shared/components/button/button.component';
import { Input } from '@/shared/components/input/input.component';
import { useFormContext } from '@/shared/layouts/form/form.hook';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ClientNewSchema } from './client-new.schema';
import { cpfMask } from '@/shared/utils/masks/cpf.mask';
import { phoneMask } from '@/shared/utils/masks/phone.mask';
import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { useClientNew } from './client-new.hook';

export function ClientNewPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	setFormPageTitle('Cadastrar cliente');

	const {
		handlers: { handleSubmit },
	} = useClientNew();

	return (
		<main className='w-96'>
			<Formik
				initialValues={{ name: '', cpf: '', email: '', phone_number: '' }}
				validationSchema={toFormikValidationSchema(ClientNewSchema)}
				validateOnChange
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

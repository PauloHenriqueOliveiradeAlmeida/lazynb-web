import { Button } from '@/shared/components/button/button.component';
import { Input } from '@/shared/components/input/input.component';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ForgotPasswordSendSchema } from './forgot-password-send.schema';
import { useForgotPasswordSendPage } from './forgot-password-send.hook';
import { useFormContext } from '@/shared/layouts/form/form.hook';

export function ForgotPasswordSendPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	setFormPageTitle('Esqueceu a senha');

	const {
		handlers: { handleSubmit },
	} = useForgotPasswordSendPage();

	return (
		<main className='w-2/4 place-items-center'>
			<h3 className='mb-24 text-xl'>
				Será enviado um código para redefinição da senha informe seu e-mail no campo abaixo.
			</h3>
			<Formik
				initialValues={{ email: '' }}
				validationSchema={toFormikValidationSchema(ForgotPasswordSendSchema)}
				onSubmit={handleSubmit}
			>
				<Form className='flex flex-col gap-16 w-96'>
					<Input name='email' placeholder='Email' />
					<div className='flex justify-around items-center'>
						<Button label='Continuar' variant='filled' fullWidth />
					</div>
				</Form>
			</Formik>
			<span className='block text-center mt-8 text-lg'>
				Já possui uma acesso?{' '}
				<Link to='/login' className='font-bold'>
					Volte ao Login!
				</Link>
			</span>
		</main>
	);
}

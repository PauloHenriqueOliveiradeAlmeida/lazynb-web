import { InputPassword } from '@/shared/components/input-password/input-password.component';
import { Button } from '@/shared/components/button/button.component';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ForgotPasswordRegistrySchema } from './forgot-password-registry.schema';
import { useForgotPasswordRegistryPage } from './forgot-password-registry.hook';
import { useFormContext } from '@/shared/layouts/form/form.hook';

export function ForgotPasswordRegistryPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	setFormPageTitle('Esqueceu a senha');

	const {
		handlers: { handleSubmit },
	} = useForgotPasswordRegistryPage();

	return (
		<main className='w-96'>
			<h3 className='mb-24 text-2xl'>Para finalizar, informe uma nova senha</h3>

			<Formik
				initialValues={{ password: '', confirmPassword: '' }}
				validationSchema={toFormikValidationSchema(ForgotPasswordRegistrySchema)}
				onSubmit={handleSubmit}
			>
				<Form className='flex flex-col gap-16'>
					<InputPassword name='password' placeholder='Senha' />
					<InputPassword name='confirmPassword' placeholder='Confirmar a Senha' />
					<div className='flex justify-around items-center'>
						<Button label='Finalizar' variant='filled' fullWidth />
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

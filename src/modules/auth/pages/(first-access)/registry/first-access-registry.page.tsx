import { Input } from '@/shared/components/input/input.component';
import { InputPassword } from '@/shared/components/input-password/input-password.component';
import { useAuthContext } from '@/modules/auth/providers/contexts/auth.hook';
import { Button } from '@/shared/components/button/button.component';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { FirstAccessRegistrySchema } from './first-access-registry.schema';
import { useFirstAccessRegistryPage } from './first-access-registry.hook';

export function FirstAccessRegistryPage() {
	const {
		handlers: { setAuthPageTitle },
	} = useAuthContext();
	setAuthPageTitle('Primeiro Acesso');

	const {
		handlers: { handleSubmit },
	} = useFirstAccessRegistryPage();

	return (
		<main className='w-96'>
			<Formik
				initialValues={{ email: '', password: '', confirmPassword: '' }}
				validationSchema={toFormikValidationSchema(FirstAccessRegistrySchema)}
				onSubmit={handleSubmit}
			>
				<Form className='flex flex-col gap-16'>
					<Input name='email' placeholder='Email' />
					<InputPassword name='password' placeholder='Senha' />
					<InputPassword name='confirmPassword' placeholder='Confirmar a Senha' />
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

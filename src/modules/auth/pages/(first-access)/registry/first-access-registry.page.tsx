import { Input } from '@/shared/components/input/input.component';
import { InputPassword } from '@/shared/components/input-password/input-password.component';
import { useAuthContext } from '@/modules/auth/providers/contexts/auth.hook';
import { Button } from '@/shared/components/button/button.component';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { FirstAccessRegistrySchema } from './first-access-registry.schema';

export function FirstAccessRegistryPage() {
	const {
		handlers: { setAuthPageTitle },
	} = useAuthContext();
	setAuthPageTitle('Primeiro Acesso');
	const navigate = useNavigate();

	return (
		<main className='w-96'>
			<Formik
				initialValues={{}}
				validationSchema={toFormikValidationSchema(FirstAccessRegistrySchema)}
				onSubmit={() => {}}
			>
				<Form className='flex flex-col gap-16'>
					<Input name='email' placeholder='Email' />
					<InputPassword name='password' placeholder='Senha' />
					<InputPassword name='confirmPassword' placeholder='Confirmar a Senha' />
					<div className='flex justify-around items-center'>
						<Button label='Continuar' variant='filled' fullWidth onClick={() => navigate('/first-access/verify')} />
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

import { Input } from '@/shared/components/input/input.component';
import { InputPassword } from '@/shared/components/input-password/input-password.component';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { LoginSchema } from './login.schema';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useLoginPage } from './login.hook';
import { Button } from '@/shared/components/button/button.component';
import { useFormContext } from '@/shared/layouts/form/form.hook';

export function LoginPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	const { handlers } = useLoginPage();
	setFormPageTitle('Faça seu Login');

	return (
		<main className='w-96'>
			<h3 className='mb-24 text-2xl'>
				É novo por aqui? Realize seu
				<br />
				<Link to='/first-access/registry' className='font-bold'>
					Primeiro Acesso.
				</Link>
			</h3>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={toFormikValidationSchema(LoginSchema)}
				validateOnChange
				onSubmit={handlers.handleSubmit}
			>
				<Form className='flex flex-col gap-16'>
					<Input name='email' placeholder='Email' />
					<div>
						<InputPassword name='password' placeholder='Senha' />
						<Link to='/forgot-password/send' className='block text-right pt-2'>
							Esqueceu a Senha?
						</Link>
					</div>
					<div className='flex justify-around items-center'>
						<Button label='Entrar' variant='filled' fullWidth />
					</div>
				</Form>
			</Formik>
		</main>
	);
}

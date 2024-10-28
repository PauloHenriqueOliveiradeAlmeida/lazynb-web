import { useAuthContext } from '@/modules/auth/providers/contexts/auth.hook';
import { Button } from '@/shared/components/button/button.component';
import { Link, useNavigate } from 'react-router-dom';
import { InputOTP } from '@/shared/components/input-otp/input-otp.component';
import { Formik, Form } from 'formik';

export function FirstAccessVerifyPage() {
	const {
		handlers: { setAuthPageTitle },
	} = useAuthContext();
	setAuthPageTitle('Primeiro Acesso');
	const navigate = useNavigate();

	return (
		<main className='w-96'>
			<h3 className='mb-24 text-2xl'>Verifique o código que enviamos em seu email</h3>
			<Formik initialValues={{ verificationCode: '' }} onSubmit={() => {}}>
				<Form className='flex flex-col gap-16'>
					<div>
						<InputOTP name='verificationCode' />
						<span className='block text-right pt-2 cursor-pointer'>Reenviar email</span>
					</div>
					<div className='flex justify-around items-center'>
						<Button
							label='Finalizar'
							variant='filled'
							fullWidth
							onClick={() => navigate('/first-access/successfully')}
						/>
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

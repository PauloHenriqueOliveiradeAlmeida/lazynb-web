import { Button } from '@/shared/components/button/button.component';
import { Link } from 'react-router-dom';
import { InputOTP } from '@/shared/components/input-otp/input-otp.component';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { FirstAccessVerifySchema } from './first-access-verify.schema';
import { useFirstAccessVerifyPage } from './first-access-verify.hook';
import { useFormContext } from '@/shared/layouts/form/form.hook';

export function FirstAccessVerifyPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	setFormPageTitle('Primeiro Acesso');

	const {
		handlers: { handleSubmit, resendEmail },
	} = useFirstAccessVerifyPage();

	return (
		<main className='w-96'>
			<h3 className='mb-24 text-2xl'>Verifique o código que enviamos em seu email</h3>
			<Formik
				initialValues={{ verificationCode: '' }}
				validationSchema={toFormikValidationSchema(FirstAccessVerifySchema)}
				onSubmit={handleSubmit}
			>
				<Form className='flex flex-col gap-16'>
					<div>
						<InputOTP name='verificationCode' />
						<span className='block text-right pt-2 cursor-pointer' onClick={resendEmail}>
							Reenviar email
						</span>
					</div>
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

import { useState } from 'react';
import { useAuthContext } from '@/modules/auth/providers/contexts/auth.hook';
import { Button } from '@/shared/components/button/button.component';
import { Link, useNavigate } from 'react-router-dom';
import { InputOTP } from '@/shared/components/input-otp/input-otp.component';

export function FirstAccessVerifyPage() {
	const {
		handlers: { setAuthPageTitle },
	} = useAuthContext();
	setAuthPageTitle('Primeiro Acesso');
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		verificationCode: '',
	});

	return (
		<main className='w-96'>
			<h3 className='mb-24 text-2xl'>Verifique o código que enviamos em seu email</h3>
			<form className='flex flex-col gap-16'>
				<div>
					<InputOTP
						value={inputs.verificationCode}
						onChange={(value) => setInputs((prevState) => ({ ...prevState, verificationCode: value }))}
					/>
					<span className='block text-right pt-2 cursor-pointer'>Reenviar email</span>
				</div>
				<div className='flex justify-around items-center'>
					<Button label='Finalizar' variant='filled' fullWidth onClick={() => navigate('/first-access/successfully')} />
				</div>
			</form>
			<span className='block text-center mt-8 text-lg'>
				Já possui uma acesso?{' '}
				<Link to='/login' className='font-bold'>
					Volte ao Login!
				</Link>
			</span>
		</main>
	);
}

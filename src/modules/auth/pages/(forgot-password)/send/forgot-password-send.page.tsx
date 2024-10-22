import { useAuthContext } from '@/modules/auth/providers/contexts/auth.hook';
import { Button } from '@/shared/components/button/button.component';
import { Input } from '@/shared/components/input/input.component';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function ForgotPasswordSendPage() {
	const {
		handlers: { setAuthPageTitle },
	} = useAuthContext();
	setAuthPageTitle('Esqueceu a senha');
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		email: '',
	});

	return (
		<main className='w-2/4 place-items-center'>
			<h3 className='mb-24 text-xl'>
				Será enviado um código para redefinição da senha informe seu e-mail no campo abaixo.
			</h3>
			<form className='flex flex-col gap-16 w-96'>
				<Input
					placeholder='Email'
					value={inputs.email}
					onChange={(value) => setInputs((prevstate) => ({ ...prevstate, email: value }))}
				/>
				<div className='flex justify-around items-center'>
					<Button label='Continuar' variant='filled' fullWidth onClick={() => navigate('/forgot-password/verify')} />
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

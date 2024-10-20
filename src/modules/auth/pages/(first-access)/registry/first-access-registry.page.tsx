import { Input } from '@/shared/components/input/input.component';
import { useState } from 'react';
import { InputPassword } from '@/shared/components/input-password/input-password.component';
import { useAuthContext } from '@/modules/auth/providers/contexts/auth.hook';
import { Button } from '@/shared/components/button/button.component';
import { Link, useNavigate } from 'react-router-dom';

export function FirstAccessRegistryPage() {
	const {
		handlers: { setAuthPageTitle },
	} = useAuthContext();
	setAuthPageTitle('Primeiro Acesso');
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	return (
		<main className='w-96'>
			<form className='flex flex-col gap-16'>
				<Input
					placeholder='Email'
					value={inputs.email}
					onChange={(value) => setInputs((prevstate) => ({ ...prevstate, email: value }))}
				/>
				<InputPassword
					placeholder='Senha'
					value={inputs.password}
					onChange={(value) => setInputs((prevstate) => ({ ...prevstate, password: value }))}
				/>
				<InputPassword
					placeholder='Confirmar a Senha'
					value={inputs.confirmPassword}
					onChange={(value) => setInputs((prevstate) => ({ ...prevstate, confirmPassword: value }))}
				/>
				<div className='flex justify-around items-center'>
					<Button label='Continuar' variant='filled' fullWidth onClick={() => navigate('/first-access/verify')} />
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

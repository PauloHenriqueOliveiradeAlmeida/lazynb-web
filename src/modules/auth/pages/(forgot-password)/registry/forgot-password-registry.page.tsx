import { useState } from 'react';
import { InputPassword } from '@/shared/components/input-password/input-password.component';
import { useAuthContext } from '@/modules/auth/providers/contexts/auth.hook';
import { Button } from '@/shared/components/button/button.component';
import { Link, useNavigate } from 'react-router-dom';

export function ForgotPasswordRegistryPage() {
	const {
		handlers: { setAuthPageTitle },
	} = useAuthContext();
	setAuthPageTitle('Esqueceu a senha');
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	return (
		<main className='w-96'>
			<h3 className='mb-24 text-2xl'>Para finalizar, informe uma nova senha</h3>

			<form className='flex flex-col gap-16'>
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
					<Button
						label='Continuar'
						variant='filled'
						fullWidth
						onClick={() => navigate('/forgot-password/successfully')}
					/>
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

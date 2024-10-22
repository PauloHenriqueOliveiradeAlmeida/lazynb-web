import { Input } from '@/shared/components/input/input.component';
import { Button } from '../../../../shared/components/button/button.component';
import { useAuthContext } from '../../providers/contexts/auth.hook';
import { useState } from 'react';
import { InputPassword } from '@/shared/components/input-password/input-password.component';
import { Link } from 'react-router-dom';

export function LoginPage() {
	const {
		handlers: { setAuthPageTitle },
	} = useAuthContext();
	setAuthPageTitle('Faça seu Login');

	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	return (
		<main className='w-96'>
			<h3 className='mb-24 text-2xl'>
				É novo por aqui? Realize seu
				<br />
				<Link to='/first-access/registry' className='font-bold'>
					Primeiro Acesso.
				</Link>
			</h3>
			<form className='flex flex-col gap-16'>
				<Input
					placeholder='Email'
					value={inputs.email}
					onChange={(value) => setInputs((prevstate) => ({ ...prevstate, email: value }))}
				/>
				<div>
					<InputPassword
						placeholder='Senha'
						value={inputs.password}
						onChange={(value) => setInputs((prevstate) => ({ ...prevstate, password: value }))}
					/>
					<Link to='/forgot-password/send' className='block text-right pt-2'>
						Esqueceu a Senha?
					</Link>
				</div>
				<div className='flex justify-around items-center'>
					<Button label='Entrar' variant='filled' fullWidth />
				</div>
			</form>
		</main>
	);
}

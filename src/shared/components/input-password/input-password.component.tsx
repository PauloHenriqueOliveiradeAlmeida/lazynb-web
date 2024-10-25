import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Input } from '../input/input.component';
import { useState } from 'react';

interface InputPasswordProps {
	placeholder: string;
	name: string;
}

export const InputPassword = ({ placeholder, name }: InputPasswordProps) => {
	const [hidePassword, setHidePassword] = useState(true);

	return (
		<Input
			type={hidePassword ? 'password' : 'text'}
			name={name}
			placeholder={placeholder}
			icon={
				hidePassword ? (
					<EyeSlashIcon className='cursor-pointer' onClick={() => setHidePassword((prevState) => !prevState)} />
				) : (
					<EyeIcon className='cursor-pointer' onClick={() => setHidePassword((prevState) => !prevState)} />
				)
			}
		/>
	);
};

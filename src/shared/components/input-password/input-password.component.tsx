import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Input } from '../input/input.component';
import { useState } from 'react';

interface InputPasswordProps {
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
}

export const InputPassword = ({ placeholder, onChange, value }: InputPasswordProps) => {
	const [hidePassword, setHidePassword] = useState(true);

	return (
		<Input
			value={value}
			type={hidePassword ? 'password' : 'text'}
			onChange={onChange}
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

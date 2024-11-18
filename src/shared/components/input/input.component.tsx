import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { useInput } from './input.hook';

interface InputProps {
	placeholder: string;
	name: string;
	type?: HTMLInputTypeAttribute;
	icon?: ReactNode;
	format?: (value: string) => string;
	maxLength?: number;
}

export const Input = ({ placeholder, name, type, icon, format, maxLength }: InputProps) => {
	const { states, handlers } = useInput(name, maxLength);

	const textColor = states.meta.touched && states.meta.error ? 'text-error' : 'text-primary';

	return (
		<div>
			<div className='relative'>
				<input
					ref={states.inputRef}
					type={type || 'text'}
					className={`${textColor} ${states.meta.touched && states.meta.error ? 'border-error' : 'border-primary'} border bg-transparent rounded-md w-full px-4 py-2 outline-none`}
					{...states.field}
					onChange={handlers.handleChange}
					value={format ? format(states.field.value) : states.field.value}
					maxLength={maxLength}
				/>
				<div className={`${textColor} absolute right-3 top-1/2 -translate-y-1/2 w-5`}>{icon}</div>
				<label
					onClick={handlers.handleFocus}
					className={`${textColor} bg-white absolute duration-300 px-2 cursor-text
				${states.floatingLabel ? '-top-2 left-2 text-xs' : 'top-1/2 -translate-y-1/2 left-3'}`}
				>
					{placeholder}
				</label>
			</div>
			{states.meta.touched && states.meta.error && <div className='text-error text-xs'>{states.meta.error}</div>}
		</div>
	);
};

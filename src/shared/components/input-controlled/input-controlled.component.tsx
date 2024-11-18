import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { useInputControlled } from './input-controlled.hook';

interface InputControlledProps {
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	type?: HTMLInputTypeAttribute;
	icon?: ReactNode;
}

export const InputControlled = ({ placeholder, value, onChange, type, icon }: InputControlledProps) => {
	const { states, handlers } = useInputControlled(onChange);
	return (
		<div className='relative'>
			<input
				type={type || 'text'}
				className={`border-primary text-primary border bg-white rounded-md w-full px-4 py-2 outline-none`}
				onChange={handlers.handleChange}
				value={value}
			/>
			<div className={`text-primary absolute right-3 top-1/2 -translate-y-1/2 w-5`}>{icon}</div>
			<label
				onClick={handlers.handleFocus}
				className={`text-primary bg-white absolute duration-300 px-2 cursor-text
				${states.floatingLabel ? '-top-2 left-2 text-xs' : 'top-1/2 -translate-y-1/2 left-3'}`}
			>
				{placeholder}
			</label>
		</div>
	);
};

import { HTMLInputTypeAttribute, ReactNode, useRef } from 'react';

interface InputProps {
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	type?: HTMLInputTypeAttribute;
	icon?: ReactNode;
}

export const Input = ({ placeholder, value, onChange, type, icon }: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const floatingLabel = !!value;

	return (
		<div className='relative'>
			<input
				ref={inputRef}
				type={type || 'text'}
				className='text-primary border-primary border bg-transparent rounded-md w-full px-4 py-2 outline-none'
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
			<div className='text-primary absolute right-3 top-1/2 -translate-y-1/2 w-5'>{icon}</div>
			<label
				onClick={() => inputRef.current?.focus()}
				className={`text-primary bg-white absolute duration-300 px-2 cursor-text
				${floatingLabel ? '-top-2 left-2 text-xs' : 'top-1/2 -translate-y-1/2 left-3'}`}
			>
				{placeholder}
			</label>
		</div>
	);
};

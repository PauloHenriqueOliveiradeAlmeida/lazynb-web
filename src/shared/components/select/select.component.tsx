import { useSelect } from './select.hook';

interface SelectProps {
	placeholder: string;
	name: string;
	options: {
		label: string;
		value: string | number;
	}[];
	readOnly?: boolean;
	className?: string;
}
export const Select = ({ name, options, placeholder, readOnly, className }: SelectProps) => {
	const { states, handlers } = useSelect(name);

	const textColor = states.meta.touched && states.meta.error ? 'text-error' : 'text-primary';

	return (
		<div className={className}>
			<div className='relative'>
				<select
					disabled={readOnly || false}
					className={`${textColor} ${states.meta.touched && states.meta.error ? 'border-error' : 'border-primary'} border bg-transparent rounded-md w-full px-4 py-2 outline-none`}
					{...states.field}
					onChange={handlers.handleChange}
				>
					{options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
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

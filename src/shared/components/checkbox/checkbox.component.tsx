import { useField } from 'formik';

interface CheckboxProps {
	name: string;
	label: string;
}

export const Checkbox = ({ name, label }: CheckboxProps) => {
	const [field, meta] = useField(name);

	const textColor = meta.touched && meta.error ? 'text-error' : 'text-primary';

	return (
		<div>
			<div className='flex gap-4 items-center'>
				<input
					type={'checkbox'}
					checked={field.value}
					className={`
						${textColor} outline-none appearance-none w-6 h-6 border-2 border-primary rounded-md checked:bg-primary cursor-pointer relative
						after:absolute after:bg-white after:w-2 after:h-2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-sm`}
					{...field}
				/>
				<label className={`${textColor}`}>{label}</label>
			</div>
			{meta.touched && meta.error && <div className='text-error text-xs'>{meta.error}</div>}
		</div>
	);
};

import { useField } from 'formik';
import { useInputOTP } from './input-otp.hook';

interface InputOTPProps {
	name: string;
}

export const InputOTP = ({ name }: InputOTPProps) => {
	const [field, meta] = useField(name);
	const { states, handlers } = useInputOTP(field.value, field.onChange);

	return (
		<div className='flex gap-4 items-center justify-center'>
			{states.otpNumbers.map((value, index) => {
				return (
					<>
						<input
							key={`otp-input-${index}`}
							type='number'
							maxLength={1}
							{...field}
							value={value}
							onChange={(event) => handlers.handleChange(event.target.value, index)}
							onKeyUp={(event) => handlers.handleKeyUp(event.key, index)}
							ref={(input) => (states.inputRefs.current[index] = input as HTMLInputElement)}
							className='w-12 text-primary text-center py-4 text-lg font-bold bg-white border-2 rounded-md border-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
						/>
						{meta.touched && meta.error && <div className='text-red-500'>{meta.error}</div>}
					</>
				);
			})}
		</div>
	);
};

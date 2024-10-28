import { useInputOTP } from './input-otp.hook';

interface InputOTPProps {
	name: string;
}

export const InputOTP = ({ name }: InputOTPProps) => {
	const { states, handlers } = useInputOTP(name);

	return (
		<div className='flex gap-4 items-center justify-center'>
			{states.otpNumbers.map((value, index) => (
				<>
					<input
						key={`otp-input-${index}`}
						type='number'
						maxLength={1}
						max={1}
						{...states.field}
						value={value}
						onChange={(event) => handlers.handleChange(event.target.value, index)}
						onBlur={(event) => handlers.handleBlur(event.target.value, index)}
						onKeyUp={(event) => handlers.handleKeyUp(event.key, index)}
						ref={(input) => (states.inputRefs.current[index] = input as HTMLInputElement)}
						className='w-12 text-primary text-center py-4 text-lg font-bold bg-white border-2 rounded-md border-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
					/>
					{states.meta.touched && states.meta.error && <div className='text-red-500'>{states.meta.error}</div>}
				</>
			))}
		</div>
	);
};

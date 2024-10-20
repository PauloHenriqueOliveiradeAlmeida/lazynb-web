import { useRef } from 'react';

export function useInputOTP(value: string, onChange: (value: string) => void) {
	const inputRefs = useRef<HTMLInputElement[]>([]);
	const otpNumbers = value.split('').concat(Array(6 - value.length).fill(''));

	const handleChange = (value: string, index: number) => {
		const [sanitizedValue] = value.replace(/[\D]/g, '');
		const newOtpValues = [...otpNumbers];
		newOtpValues[index] = sanitizedValue || '';
		onChange(newOtpValues.join(''));
	};

	const handleKeyUp = (key: string, index: number) => {
		if (otpNumbers[index] === '') {
			if (key === 'Backspace') {
				inputRefs.current[index - 1]?.focus();
				inputRefs.current[index - 1]?.select();
			}
		} else {
			inputRefs.current[index + 1]?.focus();
		}
	};

	return {
		states: { otpNumbers, inputRefs },
		handlers: { handleChange, handleKeyUp },
	};
}

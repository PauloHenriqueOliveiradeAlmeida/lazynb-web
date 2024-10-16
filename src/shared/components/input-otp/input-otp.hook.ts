import { useRef, useState } from 'react';

export function useInputOTP() {
	const [otpNumbers, setOtpNumbers] = useState(new Array(6).fill(''));
	const inputRefs = useRef<HTMLInputElement[]>([]);

	const handleChange = (value: string, index: number) => {
		const [sanitizedValue] = value.replace(/[\D]/g, '');
		const newOtpValues = [...otpNumbers];
		newOtpValues[index] = sanitizedValue || '';
		setOtpNumbers(newOtpValues);
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

import { useField } from 'formik';
import { useRef } from 'react';

export function useInputOTP(name: string) {
	const inputRefs = useRef<HTMLInputElement[]>([]);
	const [field, meta] = useField(name);
	const otpNumbers: string[] = field.value.split('').concat(Array(6 - field.value.length).fill(''));

	const handleChange = (value: string, index: number) => {
		const newOtpValues = generateNewOtpValues(value, index);
		field.onChange({ target: { name, value: newOtpValues.join('') } });
	};

	const handleBlur = (value: string, index: number) => {
		const newOtpValues = generateNewOtpValues(value, index);
		field.onBlur({ target: { name, value: newOtpValues.join('') } });
	};

	const generateNewOtpValues = (value: string, index: number) => {
		const [sanitizedValue] = value.replace(/[\D]/g, '');
		const newOtpValues = [...otpNumbers];
		newOtpValues[index] = sanitizedValue || '';
		return newOtpValues;
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
		states: { otpNumbers, inputRefs, field, meta },
		handlers: { handleChange, handleKeyUp, handleBlur },
	};
}

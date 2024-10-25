import { useField } from 'formik';
import { ChangeEvent, useRef, useState } from 'react';

export function useInput(inputName: string) {
	const [floatingLabel, setFloatingLabel] = useState(false);
	const [field, meta] = useField(inputName);
	const inputRef = useRef<HTMLInputElement>(null);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFloatingLabel(!!event.target.value);
		field.onChange(event);
	};

	const handleFocus = () => {
		inputRef.current?.focus();
	};

	return {
		states: { floatingLabel, inputRef, field, meta },
		handlers: { handleChange, handleFocus },
	};
}

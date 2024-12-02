import { useField } from 'formik';
import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';

export function useInput(inputName: string, maxLength?: number) {
	const [floatingLabel, setFloatingLabel] = useState(false);
	const [field, meta] = useField(inputName);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFloatingLabel(!!event.target.value);
		if (maxLength && event.target.value.length > maxLength) return;
		field.onChange(event);
	};

	const handleFocus = () => {
		inputRef.current?.focus();
	};

	const handleBlur = (event: FocusEvent<HTMLInputElement, Element>, onBlur: () => void) => {
		onBlur();
		field.onBlur(event);
	};

	useEffect(() => {
		if (meta.value) setFloatingLabel(true);
	}, [meta.value]);

	return {
		states: { floatingLabel, inputRef, field, meta },
		handlers: { handleChange, handleFocus, handleBlur },
	};
}

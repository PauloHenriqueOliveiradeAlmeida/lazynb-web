import { useField } from 'formik';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export function useSelect(inputName: string) {
	const [floatingLabel, setFloatingLabel] = useState(false);
	const [field, meta] = useField(inputName);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setFloatingLabel(!!event.target.value);
		field.onChange(event);
	};

	const handleFocus = () => {
		inputRef.current?.focus();
	};

	useEffect(() => {
		if (meta.value) setFloatingLabel(true);
	}, [meta.value]);

	return {
		states: { floatingLabel, inputRef, field, meta },
		handlers: { handleChange, handleFocus },
	};
}

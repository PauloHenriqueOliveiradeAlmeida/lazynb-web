import { ChangeEvent, useRef, useState } from 'react';

export function useInputControlled(onChange: (value: string) => void) {
	const [floatingLabel, setFloatingLabel] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFloatingLabel(!!event.target.value);
		onChange(event.target.value);
	};

	const handleFocus = () => {
		inputRef.current?.focus();
	};

	return {
		states: { floatingLabel, inputRef },
		handlers: { handleChange, handleFocus },
	};
}

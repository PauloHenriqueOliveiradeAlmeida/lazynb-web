interface ButtonProps {
	label: string;
	variant: 'filled' | 'outlined';
	fullWidth?: boolean;
	type?: HTMLButtonElement['type'];
	onClick?: () => void;
}

export const Button = ({ label, onClick, variant, fullWidth, type }: ButtonProps) => (
	<button
		type={type ?? 'submit'}
		className={`px-10 py-2
		border-primary border-2
			rounded-md transition-all
			${variant === 'filled' ? 'text-dark' : 'text-primary'}
			${variant === 'filled' ? 'bg-primary' : 'bg-transparent'}
			${variant === 'filled' ? 'hover:bg-transparent' : 'hover:bg-primary'}
			${variant === 'filled' ? 'text-white' : 'text-primary'}
			${variant === 'filled' ? 'hover:text-primary' : 'hover:text-white'}
			${fullWidth && 'w-full'}`}
		onClick={onClick}
	>
		{label}
	</button>
);

interface ButtonProps {
	label: string;
	onClick?: () => void;
	variant: 'filled' | 'outlined';
}

export const Button = ({ label, onClick, variant }: ButtonProps) => (
	<button
		className={`px-8 py-2
			border-primary border-2
			 rounded-sm transition-all
			${variant === 'filled' ? 'bg-primary' : 'bg-secondary'}
			${variant === 'filled' ? 'hover:bg-secondary' : 'hover:bg-primary'}`}
		onClick={onClick}
	>
		{label}
	</button>
);

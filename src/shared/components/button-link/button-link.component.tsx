import { Link } from 'react-router-dom';

interface ButtonLinkProps {
	to: string;
	label: string;
	variant: 'filled' | 'outlined';
	fullWidth?: boolean;
}

export const ButtonLink = ({ to, label, variant, fullWidth }: ButtonLinkProps) => (
	<Link
		className={`px-10 py-2
			border-primary border-2
			rounded-md transition-all
			${variant === 'filled' ? 'text-dark' : 'text-primary'}
			${variant === 'filled' ? 'bg-primary' : 'bg-transparent'}
			${variant === 'filled' ? 'hover:bg-transparent' : 'hover:bg-primary'}
			${variant === 'filled' ? 'text-white' : 'text-primary'}
			${variant === 'filled' ? 'hover:text-primary' : 'hover:text-white'}
			${fullWidth && 'w-full'}`}
		to={to}
	>
		{label}
	</Link>
);

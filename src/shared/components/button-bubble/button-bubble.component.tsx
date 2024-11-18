import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonBubbleProps {
	icon: ReactNode;
	to: string;
	className?: string;
}

export const ButtonBubble = ({ icon, to, className }: ButtonBubbleProps) => (
	<Link
		to={to}
		className={`w-16 h-16 rounded-full text-primary shadow-lg hover:bg-whiteHighlight transition p-4 text-md ${className}`}
	>
		{icon}
	</Link>
);

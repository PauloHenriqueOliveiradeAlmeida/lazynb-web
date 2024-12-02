import { ButtonLink } from '@/shared/components/button-link/button-link.component';

export function NotFoundPage() {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='font-bold text-primary text-4xl'>Página não encontrada</h1>
			<p className='text-xl text-primary mt-4'>Parece que você se perdeu...</p>
			<ButtonLink to='/' label='Voltar ao início' variant='outlined' className='mt-16' />
		</div>
	);
}

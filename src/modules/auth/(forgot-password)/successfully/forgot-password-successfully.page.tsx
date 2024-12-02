import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { useFormContext } from '@/shared/layouts/form/form.hook';

export function ForgotPasswordSuccessfullyPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	setFormPageTitle('Esqueceu a senha');

	return (
		<main className='w-5/6 text-center'>
			<h3 className='text-3xl font-bold mb-24'>Alteração de senha realizada com sucesso!!!</h3>
			<p className='text-2xl mb-52'>Retorne a página inicial e faça seu login</p>
			<ButtonLink to='/login' label='Retornar a página de login' variant='filled' />
		</main>
	);
}

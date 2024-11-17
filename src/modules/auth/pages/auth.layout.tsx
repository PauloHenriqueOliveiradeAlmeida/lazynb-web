import backgroundImage from '@/shared/assets/images/auth/background.image.png';
import { Outlet } from 'react-router-dom';
import { useAuthContext } from '../providers/contexts/auth.hook';

export function AuthLayout() {
	const {
		states: { authPageTitle },
	} = useAuthContext();
	return (
		<main className='flex w-full min-h-screen justify-between'>
			<section
				style={{ backgroundImage: `linear-gradient(#ffffff60, #ffffff60), url(${backgroundImage})` }}
				className='flex flex-1 justify-center items-center bg-center bg-no-repeat bg-cover'
			>
				<h3 className='text-4xl font-bold text-primary'>{authPageTitle}</h3>
			</section>
			<section className='flex flex-col flex-1 justify-center items-center bg-white'>
				<Outlet />
			</section>
		</main>
	);
}

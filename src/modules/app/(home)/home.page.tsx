import { HomeModernIcon, UserIcon } from '@heroicons/react/24/outline';
import { useHomePage } from './home.hook';

export function HomePage() {
	const {
		states: { totalClients, totalProperties },
	} = useHomePage();

	return (
		<div className='flex flex-col items-left h-screen bg-white p-10'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl'>
				<div className='bg-light_red p-8 rounded-xl shadow-md text-left'>
					<UserIcon className='w-10 bg-red p-2 rounded-xl mb-4 justify-left inline text-white'></UserIcon>
					<p className='text-3xl font-bold text-secondary'>{totalClients}</p>
					<h2 className='text-lg font-semibold text-primary mt-4'>Clientes Cadastrados</h2>
				</div>

				<div className='bg-light_green p-8 rounded-xl shadow-md text-left'>
					<HomeModernIcon className='w-10 bg-green p-2 rounded-xl mb-4 justify-left inline text-secondary'></HomeModernIcon>
					<p className='text-3xl font-bold text-secondary'>{totalProperties}</p>
					<h2 className='text-lg font-semibold text-primary mt-4'>Propriedades Cadastradas</h2>
				</div>
			</div>
		</div>
	);
}

import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, ShoppingBagIcon, HomeModernIcon } from '@heroicons/react/24/outline';
import LightLogoImage from '@/shared/assets/images/light-logo.image.svg';

export function Sidebar() {
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;

	return (
		<div className='fixed top-0 left-0 z-10 w-64 h-screen bg-primary shadow-inner text-white p-8 font-semibold'>
			<div className='flex items-center justify-center mb-8'>
				<img src={LightLogoImage} alt='Logo' className='w-20 mb-4' />
			</div>
			<ul>
				<li className='mb-4'>
					<Link
						to='/'
						className={`py-2 px-4 rounded block transition-all ${isActive('/') ? 'bg-white text-secondary' : ''} hover:bg-white hover:text-secondary`}
					>
						<HomeIcon className='w-6 inline mr-2' />
						Início
					</Link>
				</li>
				<li className='mb-4'>
					<Link
						to='/property/report'
						className={`py-2 px-4 rounded block transition-all ${isActive('/property/report') ? 'bg-white text-secondary' : ''} hover:bg-white hover:text-secondary`}
					>
						<HomeModernIcon className='w-6 inline mr-2' />
						Propriedades
					</Link>
				</li>
				<li className='mb-4'>
					<Link
						to='/client/report'
						className={`py-2 px-4 rounded block transition-all ${isActive('/client/report') ? 'bg-white text-secondary' : ''} hover:bg-white hover:text-secondary`}
					>
						<ShoppingBagIcon className='w-6 inline mr-2' />
						Clientes
					</Link>
				</li>
				<li className='mb-4'>
					<Link
						to='/collaborator/report'
						className={`py-2 px-4 rounded block ${isActive('/collaborator/report') ? 'bg-white text-secondary' : ''} hover:bg-white hover:text-secondary`}
					>
						<UserGroupIcon className='w-6 inline mr-2' />
						Colaboradores
					</Link>
				</li>
			</ul>
		</div>
	);
}

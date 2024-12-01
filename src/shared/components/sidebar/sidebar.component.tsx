import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, ShoppingBagIcon, HomeModernIcon } from '@heroicons/react/24/outline';

export function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 z-10 w-64 h-screen bg-primary shadow-inner text-white p-6 font-semibold">
      <h3 className="text-2xl font-bold mb-6 text-title">LazyNB</h3>
      <ul>
        <li className="mb-4">
          <Link
            to="/"
            className={`p-2 rounded block ${isActive('/') ? 'bg-white text-secondary' : ''} hover:bg-white hover:text-secondary`}
          >
            <HomeIcon className='w-6 inline mr-2'></HomeIcon>Início
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/property/report"
            className={`p-2 rounded block ${isActive('/property/report') ? 'bg-white text-secondary' : ''} hover:bg-white hover:text-secondary`}
          >
            <HomeModernIcon className='w-6 inline mr-2'></HomeModernIcon>Propriedades
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/client/report"
            className={`p-2 rounded block ${isActive('/client/report') ? 'bg-white text-secondary' : ''} hover:bg-white hover:text-secondary`}
          >
            <ShoppingBagIcon className='w-6 inline mr-2' ></ShoppingBagIcon>Clientes
          </Link>
        </li>
        <li className='mb-4'>
          <Link
            to="/collaborator/report"
            className={`p-2 rounded block ${isActive('/collaborator/report') ? 'bg-white text-secondary' : ''} hover:bg-white hover:text-secondary`}
          >
            <UserGroupIcon className='w-6 inline mr-2'></UserGroupIcon>Colaboradores
          </Link>
        </li>
      </ul>
    </div>
  );
}

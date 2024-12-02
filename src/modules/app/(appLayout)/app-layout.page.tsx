import { Sidebar } from '@/shared/components/sidebar/sidebar.component';
import { Outlet, useNavigate } from 'react-router-dom'; // Usando o hook de navegação
import { useAppLayoutPage } from './app-layout.hook';
import { UserIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';

export function AppLayout() {
  const { collaborator, logout } = useAppLayoutPage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <div className="sticky top-0 z-0 bg-white shadow p-4 max-w-full flex justify-between">
          <h1 className="text-2xl font-bold self-center text-secondary">Dashboard</h1>
          <div className='flex items-center'>
            <div className='rounded-md shadow py-2 px-4 mr-4'>
              {collaborator ? (
                <div className='flex flex-row gap-4'>
                  <UserIcon className='w-6 inline text-secondary'></UserIcon>
                  <div>
                    <h4 className=' text-secondary font-semibold'>{collaborator.name}</h4>
                    <p className='text-sm text-shadow'>{collaborator.is_admin ? "Admin" : "Colaborador"}</p>
                  </div>
                </div>
              ) : (
                <p>Unamed</p>
              )}
            </div>
            <div
              onClick={handleLogout}
              className={`cursor-pointer rounded hover:text-white block p-2 hover:bg-[#a52c00]`}>
              <ArrowLeftStartOnRectangleIcon className='w-6 inline hover:text-white '></ArrowLeftStartOnRectangleIcon>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
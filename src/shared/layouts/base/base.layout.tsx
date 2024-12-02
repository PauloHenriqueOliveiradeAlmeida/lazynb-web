import { Router } from '@/shared/routes/setup';
import { ToastContainer } from 'react-toastify';
import { useBaseContext } from './base.hook';
import { Ping } from '@/shared/components/ping/ping.component';
export function BaseLayout() {
	const {
		states: { isLoading },
	} = useBaseContext();
	return (
		<>
			<div
				className={`fixed z-10 w-full h-full bg-shadow justify-center items-center ${isLoading ? 'flex' : 'hidden'}`}
			>
				<Ping />
			</div>
			<Router />
			<ToastContainer />
		</>
	);
}

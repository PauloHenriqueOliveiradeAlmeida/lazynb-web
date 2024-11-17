import { AuthProvider } from '@/modules/auth/providers/contexts/auth.context';
import { Route, Routes } from 'react-router-dom';

export function AppRoute() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='*' element={<>app</>} />
			</Routes>
		</AuthProvider>
	);
}

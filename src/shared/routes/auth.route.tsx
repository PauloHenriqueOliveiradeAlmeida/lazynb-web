import { AuthProvider } from '@/modules/auth/providers/contexts/auth.context';
import { LoginPage } from '@/modules/auth/pages/login/login.page';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from '@/modules/auth/pages/auth.layout';

export function AuthRoute() {
	return (
		<AuthProvider>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path='/login' element={<LoginPage />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}

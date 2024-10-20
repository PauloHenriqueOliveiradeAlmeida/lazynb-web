import { AuthProvider } from '@/modules/auth/providers/contexts/auth.context';
import { LoginPage } from '@/modules/auth/pages/login/login.page';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from '@/modules/auth/pages/auth.layout';
import { FirstAccessRegistryPage } from '@/modules/auth/pages/(first-access)/registry/first-access-registry.page';
import { FirstAccessVerifyPage } from '@/modules/auth/pages/(first-access)/verify/first-access-verify.page';
import { FirstAccessSuccessfullyPage } from '@/modules/auth/pages/(first-access)/successfully/first-access-successfully.page';

export function AuthRoute() {
	return (
		<AuthProvider>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/first-access/registry' element={<FirstAccessRegistryPage />} />
					<Route path='/first-access/verify' element={<FirstAccessVerifyPage />} />
					<Route path='/first-access/successfully' element={<FirstAccessSuccessfullyPage />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}

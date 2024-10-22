import { AuthProvider } from '@/modules/auth/providers/contexts/auth.context';
import { LoginPage } from '@/modules/auth/pages/login/login.page';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from '@/modules/auth/pages/auth.layout';
import { FirstAccessRegistryPage } from '@/modules/auth/pages/(first-access)/registry/first-access-registry.page';
import { FirstAccessVerifyPage } from '@/modules/auth/pages/(first-access)/verify/first-access-verify.page';
import { FirstAccessSuccessfullyPage } from '@/modules/auth/pages/(first-access)/successfully/first-access-successfully.page';
import { ForgotPasswordSendPage } from '@/modules/auth/pages/(forgot-password)/send/forgot-password-send.page';
import { ForgotPasswordVerifyPage } from '@/modules/auth/pages/(forgot-password)/verify/forgot-password-verify.page';
import { ForgotPasswordRegistryPage } from '@/modules/auth/pages/(forgot-password)/registry/forgot-password-registry.page';
import { ForgotPasswordSuccessfullyPage } from '@/modules/auth/pages/(forgot-password)/successfully/forgot-password-successfully.page';

export function AuthRoute() {
	return (
		<AuthProvider>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/first-access/registry' element={<FirstAccessRegistryPage />} />
					<Route path='/first-access/verify' element={<FirstAccessVerifyPage />} />
					<Route path='/first-access/successfully' element={<FirstAccessSuccessfullyPage />} />
					<Route path='/forgot-password/send' element={<ForgotPasswordSendPage />} />
					<Route path='/forgot-password/verify' element={<ForgotPasswordVerifyPage />} />
					<Route path='/forgot-password/registry' element={<ForgotPasswordRegistryPage />} />
					<Route path='/forgot-password/successfully' element={<ForgotPasswordSuccessfullyPage />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}

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
import { FirstAccessProvider } from '@/modules/auth/pages/(first-access)/first-access.context';
import { ForgotPasswordProvider } from '@/modules/auth/pages/(forgot-password)/forgot-password.context';

export function AuthRoute() {
	return (
		<AuthProvider>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path='/login' element={<LoginPage />} />
					<Route
						path='/first-access/*'
						element={
							<FirstAccessProvider>
								<Routes>
									<Route path='registry' element={<FirstAccessRegistryPage />} />
									<Route path='verify' element={<FirstAccessVerifyPage />} />
									<Route path='successfully' element={<FirstAccessSuccessfullyPage />} />
								</Routes>
							</FirstAccessProvider>
						}
					/>
					<Route
						path='/forgot-password/*'
						element={
							<ForgotPasswordProvider>
								<Routes>
									<Route path='send' element={<ForgotPasswordSendPage />} />
									<Route path='verify' element={<ForgotPasswordVerifyPage />} />
									<Route path='registry' element={<ForgotPasswordRegistryPage />} />
									<Route path='successfully' element={<ForgotPasswordSuccessfullyPage />} />
								</Routes>
							</ForgotPasswordProvider>
						}
					/>
				</Route>
			</Routes>
		</AuthProvider>
	);
}

import { Route, Routes } from 'react-router-dom';
import { FormProvider } from '../layouts/form/form.context';
import { FormLayout } from '../layouts/form/form.layout';
import { LoginPage } from '@/modules/auth/login/login.page';
import { FirstAccessProvider } from '@/modules/auth/(first-access)/first-access.context';
import { FirstAccessRegistryPage } from '@/modules/auth/(first-access)/registry/first-access-registry.page';
import { FirstAccessVerifyPage } from '@/modules/auth/(first-access)/verify/first-access-verify.page';
import { FirstAccessSuccessfullyPage } from '@/modules/auth/(first-access)/successfully/first-access-successfully.page';
import { ForgotPasswordProvider } from '@/modules/auth/(forgot-password)/forgot-password.context';
import { ForgotPasswordSendPage } from '@/modules/auth/(forgot-password)/send/forgot-password-send.page';
import { ForgotPasswordVerifyPage } from '@/modules/auth/(forgot-password)/verify/forgot-password-verify.page';
import { ForgotPasswordRegistryPage } from '@/modules/auth/(forgot-password)/registry/forgot-password-registry.page';
import { ForgotPasswordSuccessfullyPage } from '@/modules/auth/(forgot-password)/successfully/forgot-password-successfully.page';

export function AuthRoute() {
	return (
		<FormProvider>
			<Routes>
				<Route element={<FormLayout />}>
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
		</FormProvider>
	);
}

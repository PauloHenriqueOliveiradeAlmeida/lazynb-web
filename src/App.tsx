import 'react-toastify/dist/ReactToastify.css';
import { BaseLayout } from './shared/layouts/base/base.layout';
import { BaseProvider } from './shared/layouts/base/base.context';
import { AuthenticationProvider } from './shared/contexts/authentication/authentication.context';
export function App() {
	return (
		<AuthenticationProvider>
			<BaseProvider>
				<BaseLayout />
			</BaseProvider>
		</AuthenticationProvider>
	);
}

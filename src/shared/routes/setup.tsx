import { BrowserRouter } from 'react-router-dom';
import { AuthRoute } from './auth.route';

export function Router() {
	return (
		<BrowserRouter>
			<AuthRoute />
		</BrowserRouter>
	);
}

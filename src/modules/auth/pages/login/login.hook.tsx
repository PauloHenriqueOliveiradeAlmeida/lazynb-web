import { AuthService } from '@/shared/services/http/auth/auth.service';
import { LoginSchema } from './login.schema';
import { useHttp } from '@/shared/services/http/http.hook';
import { useAuthenticationContext } from '@/shared/contexts/authentication/authentication.hook';
import { useNavigate } from 'react-router-dom';

type loginSchemaValues = typeof LoginSchema._type;

export function useLoginPage() {
	const {
		handlers: { request },
	} = useHttp();
	const {
		handlers: { authenticate },
	} = useAuthenticationContext();
	const navigate = useNavigate();
	const authService = new AuthService();

	const handleSubmit = async (values: loginSchemaValues) => {
		const response = await request(() => authService.login(values));
		authenticate(response?.accessToken as string);
		navigate('/');
	};

	return {
		handlers: { handleSubmit },
	};
}

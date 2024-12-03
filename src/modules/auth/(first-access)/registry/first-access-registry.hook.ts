import { FirstAccessRegistrySchema } from './first-access-registry.schema';
import { useNavigate } from 'react-router-dom';
import { useFirstAccessContext } from '../first-access.hook';
import { useHttp } from '@/shared/services/http/http.hook';
import { AuthService } from '@/shared/services/http/auth/auth.service';
import { toast } from 'react-toastify';

type firstAccessRegistrychemaValues = typeof FirstAccessRegistrySchema._type;

export function useFirstAccessRegistryPage() {
	const {
		handlers: { setEmail, setPassword, setConfirmPassword },
	} = useFirstAccessContext();
	const {
		handlers: { request },
	} = useHttp();
	const navigate = useNavigate();

	const authService = new AuthService();

	const handleSubmit = async (values: firstAccessRegistrychemaValues) => {
		if (values.password !== values.confirmPassword) return;
		const response = await request(() => authService.sendFirstAccessEmail(values.email));
		if (!response) return;

		toast.success(response.message);
		setEmail(values.email);
		setPassword(values.password);
		setConfirmPassword(values.confirmPassword);
		navigate('/first-access/verify');
	};

	return {
		handlers: { handleSubmit },
	};
}

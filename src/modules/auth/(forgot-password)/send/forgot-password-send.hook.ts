import { toast } from 'react-toastify';
import { useForgotPasswordContext } from '../forgot-password.hook';
import { useHttp } from '@/shared/services/http/http.hook';
import { AuthService } from '@/shared/services/http/auth/auth.service';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordSendSchema } from './forgot-password-send.schema';

type forgotPasswordSendSchemaValues = typeof ForgotPasswordSendSchema._type;

export function useForgotPasswordSendPage() {
	const {
		handlers: { setEmail },
	} = useForgotPasswordContext();
	const {
		handlers: { request },
	} = useHttp();
	const navigate = useNavigate();

	const authService = new AuthService();

	const handleSubmit = async (values: forgotPasswordSendSchemaValues) => {
		const response = await request(() => authService.sendResetPasswordEmail(values.email));
		if (!response) return;

		toast.success(response.message);
		setEmail(values.email);
		navigate('/forgot-password/verify');
	};

	return {
		handlers: { handleSubmit },
	};
}

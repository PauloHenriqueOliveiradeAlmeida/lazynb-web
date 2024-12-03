import { useHttp } from '@/shared/services/http/http.hook';
import { useForgotPasswordContext } from '../forgot-password.hook';
import { ForgotPasswordRegistrySchema } from './forgot-password-registry.schema';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '@/shared/services/http/auth/auth.service';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

type forgotPasswordRegistrychemaValues = typeof ForgotPasswordRegistrySchema._type;

export function useForgotPasswordRegistryPage() {
	const {
		states: { email, verificationCode },
	} = useForgotPasswordContext();
	const {
		handlers: { request },
	} = useHttp();
	const navigate = useNavigate();

	const authService = new AuthService();

	const handleSubmit = async (values: forgotPasswordRegistrychemaValues) => {
		if (values.password !== values.confirmPassword) return;
		const response = await request(() =>
			authService.resetPassword({
				email,
				verificationCode,
				password: values.password,
				confirmPassword: values.confirmPassword,
			}),
		);
		if (!response) return;

		toast.success(response.message);
		navigate('/forgot-password/successfully');
	};

	useEffect(() => {
		if (!email) navigate('/forgot-password/send');
		if (!verificationCode) navigate('/forgot-password/verify');
	}, [email, verificationCode, navigate]);

	return {
		handlers: { handleSubmit },
	};
}

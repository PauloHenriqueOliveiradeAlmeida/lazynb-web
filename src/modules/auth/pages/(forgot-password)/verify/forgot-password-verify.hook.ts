import { useNavigate } from 'react-router-dom';
import { useForgotPasswordContext } from '../forgot-password.hook';
import { ForgotPasswordVerifySchema } from './forgot-password-verify.schema';
import { useHttp } from '@/shared/services/http/http.hook';
import { AuthService } from '@/shared/services/http/auth/auth.service';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

type forgotPasswordVerifySchemaValues = typeof ForgotPasswordVerifySchema._type;

export function useForgotPasswordVerifyPage() {
	const {
		states: { email },
		handlers: { setVerificationCode },
	} = useForgotPasswordContext();
	const {
		handlers: { request },
	} = useHttp();
	const navigate = useNavigate();

	const authService = new AuthService();

	const handleSubmit = async (values: forgotPasswordVerifySchemaValues) => {
		const response = await request(() => authService.verifyResetPasswordCode(email, values.verificationCode));
		if (!response) return;

		toast.success(response.message);
		setVerificationCode(values.verificationCode);
		navigate('/forgot-password/registry');
	};

	useEffect(() => {
		if (!email) navigate('/forgot-password/send');
	}, [email, navigate]);

	return {
		handlers: { handleSubmit },
	};
}

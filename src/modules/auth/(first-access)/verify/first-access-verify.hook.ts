import { useHttp } from '@/shared/services/http/http.hook';
import { useFirstAccessContext } from '../first-access.hook';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '@/shared/services/http/auth/auth.service';
import { FirstAccessVerifySchema } from './first-access-verify.schema';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

type firstAccessVerifySchemaValues = typeof FirstAccessVerifySchema._type;

export function useFirstAccessVerifyPage() {
	const {
		states: { email, password, confirmPassword },
	} = useFirstAccessContext();
	const {
		handlers: { request },
	} = useHttp();
	const navigate = useNavigate();

	const authService = new AuthService();

	const handleSubmit = async (values: firstAccessVerifySchemaValues) => {
		const response = await request(() =>
			authService.firstAccess({ email, password, confirmPassword, verificationCode: values.verificationCode }),
		);
		if (!response) return;

		toast.success(response.message);
		navigate('/first-access/successfully');
	};

	useEffect(() => {
		if (!email || !password || !confirmPassword) navigate('/first-access/registry');
	}, [email, password, confirmPassword, navigate]);

	return {
		handlers: { handleSubmit },
	};
}

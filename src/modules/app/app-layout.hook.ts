import { useHttp } from '@/shared/services/http/http.hook';
import { IGetCollaboratorResponseModel } from '@/shared/services/http/collaborator/models/collaborator-response.model';
import { useCallback, useEffect, useState } from 'react';
import { useAuthenticationContext } from '@/shared/contexts/authentication/authentication.hook';
import { AuthService } from '@/shared/services/http/auth/auth.service';
import { useNavigate } from 'react-router-dom';

export function useAppLayoutPage() {
	const [user, setUser] = useState<IGetCollaboratorResponseModel>();
	const {
		handlers: { deauthenticate },
	} = useAuthenticationContext();
	const {
		handlers: { request },
	} = useHttp();
	const authService = new AuthService();
	const navigate = useNavigate();

	const getLoggedUser = useCallback(async () => {
		const response = await request(authService.details);
		if (!response) return;

		setUser(response);
	}, [request, authService.details]);

	const handleLogout = () => {
		deauthenticate();
		navigate('/login');
	};

	useEffect(() => {
		getLoggedUser();
	}, [getLoggedUser]);

	return { states: { user }, handlers: { handleLogout } };
}

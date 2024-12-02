import { useHttp } from '@/shared/services/http/http.hook';
import { CollaboratorService } from '@/shared/services/http/collaborator/collaborator.service';
import { IGetCollaboratorResponseModel } from '@/shared/services/http/collaborator/models/collaborator-response.model';
import { useCallback, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function getCookie(name: string): string | null {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
	return null;
}

function removeCookie(name: string) {
	document.cookie = `${name}=; Max-Age=-99999999;`;
}

export function useAppLayoutPage() {
	const [collaborator, setCollaborator] = useState<IGetCollaboratorResponseModel | null>(null);
	const { handlers: { request } } = useHttp();
	const collaboratorService = new CollaboratorService();

	const getCollaborator = useCallback(async () => {
		const token = getCookie('access_token');
		if (!token) return;

		const decodedToken: any = jwtDecode(token);
		const userId = decodedToken.id;

		const response = await request(collaboratorService.getAll);
		if (!response) return;

		const userCollaborator = response.find((collaborator) => collaborator.id === userId);
		if (userCollaborator) {
			setCollaborator(userCollaborator);
		}
	}, [collaboratorService.getAll, request]);

	const logout = () => {
		removeCookie('access_token');
		setCollaborator(null);
	};

	useEffect(() => {
		getCollaborator();
	}, [getCollaborator]);

	return { collaborator, logout };
}

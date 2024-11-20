import { CollaboratorService } from '@/shared/services/http/collaborator/collaborator.service';
import { IGetCollaboratorResponseModel } from '@/shared/services/http/collaborator/models/collaborator-response.model';
import { useHttp } from '@/shared/services/http/http.hook';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function useCollaboratorReport() {
	const [search, setSearch] = useState('');
	const [collaborators, setCollaborators] = useState<IGetCollaboratorResponseModel[]>([]);
	const [filteredCollaborators, setFilteredCollaborators] = useState<IGetCollaboratorResponseModel[]>([]);
	const {
		handlers: { request },
	} = useHttp();
	const collaboratorService = new CollaboratorService();

	const navigate = useNavigate();

	const handleSearch = (value: string) => {
		setSearch(value);

		if (!value) {
			setFilteredCollaborators(collaborators);
			return;
		}

		setFilteredCollaborators((prevState) =>
			prevState.filter((collaborator) => collaborator.name.toLowerCase().includes(value.toLowerCase())),
		);
	};

	const handleDelete = async (id: string) => {
		const response = await request(() => collaboratorService.delete(id));
		if (!response) return;
		toast.success(response.message);
		setCollaborators((prevState) => prevState.filter((collaborator) => collaborator.id !== id));
		setFilteredCollaborators((prevState) => prevState.filter((collaborator) => collaborator.id !== id));
	};

	const getAllCollaborators = useCallback(async () => {
		const response = await request(collaboratorService.getAll);
		if (!response) return;
		setCollaborators(response);
		setFilteredCollaborators(response);
	}, [collaboratorService.getAll, request]);

	useEffect(() => {
		getAllCollaborators();
	}, [getAllCollaborators]);

	return { states: { filteredCollaborators, search }, handlers: { handleSearch, handleDelete, navigate } };
}

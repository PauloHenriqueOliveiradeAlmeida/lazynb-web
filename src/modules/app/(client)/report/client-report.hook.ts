import { ClientService } from '@/shared/services/http/client/client.service';
import { IGetClientResponseModel } from '@/shared/services/http/client/models/client-response.model';
import { useHttp } from '@/shared/services/http/http.hook';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function useClientReport() {
	const [search, setSearch] = useState('');
	const [clients, setClients] = useState<IGetClientResponseModel[]>([]);
	const [filteredClients, setFilteredClients] = useState<IGetClientResponseModel[]>([]);
	const {
		handlers: { request },
	} = useHttp();
	const clientService = new ClientService();

	const navigate = useNavigate();

	const handleSearch = (value: string) => {
		setSearch(value);

		if (!value) {
			setFilteredClients(clients);
			return;
		}

		setFilteredClients((prevState) =>
			prevState.filter((client) => client.name.toLowerCase().includes(value.toLowerCase())),
		);
	};

	const handleDelete = async (id: number) => {
		const response = await request(() => clientService.delete(id));
		if (!response) return;
		toast.success(response.message);
		setClients((prevState) => prevState.filter((client) => client.id !== id));
		setFilteredClients((prevState) => prevState.filter((client) => client.id !== id));
	};

	const getAllClients = useCallback(async () => {
		const response = await request(clientService.getAll);
		if (!response) return;
		setClients(response);
		setFilteredClients(response);
	}, [clientService.getAll, request]);

	useEffect(() => {
		getAllClients();
	}, [getAllClients]);

	return { states: { filteredClients, search }, handlers: { handleSearch, handleDelete, navigate } };
}

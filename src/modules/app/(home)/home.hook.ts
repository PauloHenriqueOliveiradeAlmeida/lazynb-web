import { useHttp } from '@/shared/services/http/http.hook';
import { ClientService } from '@/shared/services/http/client/client.service';
import { PropertyService } from '@/shared/services/http/property/property.service';
import { useCallback, useEffect, useState } from 'react';

export function useHomePage() {
	const [totalClients, setTotalClients] = useState(0);
	const [totalProperties, setTotalProperties] = useState(0);

	const {
		handlers: { request },
	} = useHttp();
	const clientService = new ClientService();
	const propertyService = new PropertyService();

	const getTotalClients = useCallback(async () => {
		const response = await request(clientService.getAll);
		if (!response) return;
		setTotalClients(response.length);
	}, [request, clientService.getAll]);

	const getTotalProperties = useCallback(async () => {
		const response = await request(propertyService.getAll);
		if (!response) return;
		setTotalProperties(response.length);
	}, [request, propertyService.getAll]);

	useEffect(() => {
		getTotalClients();
		getTotalProperties();
	}, [getTotalClients, getTotalProperties]);

	return { states: { totalClients, totalProperties } };
}

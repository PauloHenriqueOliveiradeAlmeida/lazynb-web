import { PropertyService } from '@/shared/services/http/property/property.service';
import { AmenityService } from '@/shared/services/http/amenity/amenity.service';
import { ClientService } from '@/shared/services/http/client/client.service';
import { PropertyNewSchema } from './property-new.schema';
import { useHttp } from '@/shared/services/http/http.hook';
import { useNavigate } from 'react-router-dom';
import { unmask } from '@/shared/utils/masks/unmask';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';

type propertyNewSchemaValues = typeof PropertyNewSchema._type;

export function usePropertyNew() {
	const {
		handlers: { request },
	} = useHttp();
	const propertyService = new PropertyService();
	const amenityService = new AmenityService();
	const clientService = new ClientService();


	const navigate = useNavigate();
	const [amenitiesOptions, setAmenitiesOptions] = useState<{ value: number; label: string }[]>([]);
	const [clientsOptions, setClientsOptions] = useState<{ value: number; label: string }[]>([]);

	useEffect(() => {
		const fetchAmenities = async () => {
			try {
				const response = await request(() => amenityService.get());
				if (response) {
					setAmenitiesOptions(
						response.map((amenity: { id: number; name: string }) => ({
							value: amenity.id,
							label: amenity.name,
						}))
					);
				}
			} catch (error) {
				console.error('Erro ao buscar amenities:', error);
			}
		};
		fetchAmenities();
	}, []);

	useEffect(() => {
		const fetchClients = async () => {
			try {
				const response = await request(() => clientService.getAll());
				if (response) {
					setClientsOptions(
						response.map((client: { id: number; name: string }) => ({
							value: client.id,
							label: client.name,
						}))
					);
				}
			} catch (error) {
				console.error('Erro ao buscar clientes:', error);
			}
		};
		fetchClients();
	}, []);


	const handleSubmit = async (values: propertyNewSchemaValues) => {
		console.log(values.clientid);
		const response = await request(() => propertyService.create({ ...values, cep: unmask(values.cep) }));
		if (!response) return;

		toast.success(response.message);
		navigate('/property/report');
	};

	return { handlers: { handleSubmit }, amenitiesOptions, clientsOptions };
}

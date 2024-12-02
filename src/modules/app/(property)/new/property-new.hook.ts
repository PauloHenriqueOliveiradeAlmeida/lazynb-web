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
import { FormikErrors } from 'formik';

type propertyNewSchemaValues = typeof PropertyNewSchema._type;

export function usePropertyNew() {
	const [amenitiesOptions, setAmenitiesOptions] = useState<{ value: number; label: string }[]>([]);
	const [clientsOptions, setClientsOptions] = useState<{ value: number; label: string }[]>([]);
	const {
		handlers: { request },
	} = useHttp();
	const propertyService = new PropertyService();
	const amenityService = new AmenityService();
	const clientService = new ClientService();

	const navigate = useNavigate();

	useEffect(() => {
		const fetchAmenities = async () => {
			const response = await request(amenityService.getAll);
			if (response) {
				setAmenitiesOptions(
					response.map((amenity: { id: number; name: string }) => ({
						value: amenity.id,
						label: amenity.name,
					})),
				);
			}
		};
		fetchAmenities();
	}, [request, amenityService.getAll]);

	useEffect(() => {
		const fetchClients = async () => {
			const response = await request(clientService.getAll);
			if (response) {
				setClientsOptions(
					response.map((client: { id: number; name: string }) => ({
						value: client.id,
						label: client.name,
					})),
				);
			}
		};
		fetchClients();
	}, [request, clientService.getAll]);

	const handleSubmit = async (values: propertyNewSchemaValues) => {
		console.log(values.clientid);
		const response = await request(() => propertyService.create({ ...values, cep: unmask(values.cep) }));
		if (!response) return;

		toast.success(response.message);
		navigate('/property/report');
	};

	const handleGetCep = async (
		cep: string,
		setValues: (
			key: keyof propertyNewSchemaValues,
			value: string,
		) => Promise<void | FormikErrors<propertyNewSchemaValues>>,
	) => {
		if (!cep) return;
		const response = await request(() => propertyService.getAddressByCep(cep));
		if (!response) return;
		setValues('neighborhood', response.neighborhood);
		setValues('city', response.city);
		setValues('uf', response.uf);
	};

	return { states: { amenitiesOptions, clientsOptions }, handlers: { handleSubmit, handleGetCep } };
}

import { PropertyService } from '@/shared/services/http/property/property.service';
import { AmenityService } from '@/shared/services/http/amenity/amenity.service';
import { ClientService } from '@/shared/services/http/client/client.service';
import { PropertyEditSchema } from './property-edit.schema';
import { useHttp } from '@/shared/services/http/http.hook';
import { useNavigate, useParams } from 'react-router-dom';
import { unmask } from '@/shared/utils/masks/unmask';
import { toast } from 'react-toastify';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { IGetPropertyResponseModel } from '@/shared/services/http/property/models/property-response.model';


type propertyEditSchemaValues = typeof PropertyEditSchema._type;

export function usePropertyEdit() {
	const [property, setProperty] = useState<IGetPropertyResponseModel>();
	const {
		handlers: { request },
	} = useHttp();
	const propertyService = useMemo(() => new PropertyService(), []);

	const amenityService = useMemo(() => new AmenityService(), []);
	const clientService = useMemo(() => new ClientService(), []);


	const navigate = useNavigate();
	const params = useParams();
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


	const handleSubmit = async (values: propertyEditSchemaValues) => {
		const response = await request(() =>
			propertyService.update(params.id as string, {
				...values,
				cep: unmask(values.cep)
			})
		);
		if (!response) return;

		toast.success(response.message);
		navigate('/property/report');
	};

	const getProperty = useCallback(async () => {
		const response = await request(() => propertyService.get(params.id as string));
		if (!response) return;
		console.log(response);
		setProperty(response);
	}, [params.id, request, propertyService]);

	useEffect(() => {
		if (!params.id) navigate('/property/report');
		getProperty();
	}, [params.id, navigate, getProperty]);

	return { states: { property }, handlers: { handleSubmit }, amenitiesOptions, clientsOptions };
}

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
import { FormikErrors } from 'formik';

type propertyEditSchemaValues = typeof PropertyEditSchema._type;

export function usePropertyEdit() {
	const [property, setProperty] = useState<IGetPropertyResponseModel>();
	const [amenitiesOptions, setAmenitiesOptions] = useState<{ value: number; label: string }[]>([]);
	const [clientsOptions, setClientsOptions] = useState<{ value: number; label: string }[]>([]);

	const {
		handlers: { request },
	} = useHttp();

	const propertyService = useMemo(() => new PropertyService(), []);
	const amenityService = new AmenityService();
	const clientService = new ClientService();

	const navigate = useNavigate();
	const params = useParams();

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

	const handleSubmit = async (values: propertyEditSchemaValues) => {
		const response = await request(() =>
			propertyService.update(params.id as string, {
				...values,
				cep: unmask(values.cep),
			}),
		);
		if (!response) return;

		toast.success(response.message);
		navigate('/property/report');
	};

	const handleGetCep = async (
		cep: string,
		setValues: (
			key: keyof propertyEditSchemaValues,
			value: string,
		) => Promise<void | FormikErrors<propertyEditSchemaValues>>,
	) => {
		if (!cep) return;
		const response = await request(() => propertyService.getAddressByCep(cep));
		if (!response) return;
		setValues('neighborhood', response.neighborhood);
		setValues('city', response.city);
		setValues('uf', response.uf);
	};

	const getProperty = useCallback(async () => {
		const response = await request(() => propertyService.get(params.id as string));
		if (!response) return;
		setProperty(response);
	}, [params.id, request, propertyService]);

	useEffect(() => {
		if (!params.id) navigate('/property/report');
		getProperty();
	}, [params.id, navigate, getProperty]);

	return { states: { property, amenitiesOptions, clientsOptions }, handlers: { handleSubmit, handleGetCep } };
}

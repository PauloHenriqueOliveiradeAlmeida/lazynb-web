import { useHttp } from '@/shared/services/http/http.hook';
import { IGetPropertyResponseModel } from '@/shared/services/http/property/models/property-response.model';
import { PropertyService } from '@/shared/services/http/property/property.service';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function usePropertyReport() {
	const [search, setSearch] = useState('');
	const [properties, setProperties] = useState<IGetPropertyResponseModel[]>([]);
	const [filteredProperties, setFilteredProperties] = useState<IGetPropertyResponseModel[]>([]);
	const {
		handlers: { request },
	} = useHttp();
	const propertyService = new PropertyService();

	const navigate = useNavigate();

	const handleSearch = (value: string) => {
		setSearch(value);

		if (!value) {
			setFilteredProperties(properties);
			return;
		}

		setFilteredProperties((prevState) =>
			prevState.filter((property) => property.name.toLowerCase().includes(value.toLowerCase())),
		);
	};

	const handleDelete = async (id: string) => {
		const response = await request(() => propertyService.delete(id));
		if (!response) return;
		toast.success(response.message);
		setProperties((prevState) => prevState.filter((property) => property.id !== id));
		setFilteredProperties((prevState) => prevState.filter((property) => property.id !== id));
	};

	const getAllProperties = useCallback(async () => {
		const response = await request(propertyService.getAll);
		if (!response) return;
		setProperties(response);
		setFilteredProperties(response);
	}, [propertyService.getAll, request]);

	useEffect(() => {
		getAllProperties();
	}, [getAllProperties]);

	return { states: { filteredProperties, search }, handlers: { handleSearch, handleDelete, navigate } };
}

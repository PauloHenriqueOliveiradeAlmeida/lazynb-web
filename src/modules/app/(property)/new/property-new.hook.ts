import { PropertyService } from '@/shared/services/http/property/property.service';
import { PropertyNewSchema } from './property-new.schema';
import { useHttp } from '@/shared/services/http/http.hook';
import { useNavigate } from 'react-router-dom';
import { unmask } from '@/shared/utils/masks/unmask';
import { toast } from 'react-toastify';

type propertyNewSchemaValues = typeof PropertyNewSchema._type;

export function usePropertyNew() {
	const {
		handlers: { request },
	} = useHttp();
	const propertyService = new PropertyService();

	const navigate = useNavigate();

	const handleSubmit = async (values: propertyNewSchemaValues) => {
		const response = await request(() => propertyService.create({ ...values, cep: unmask(values.cep) }));
		if (!response) return;

		toast.success(response.message);
		navigate('/property/report');
	};

	return { handlers: { handleSubmit } };
}

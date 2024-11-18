import { ClientService } from '@/shared/services/http/client/client.service';
import { useHttp } from '@/shared/services/http/http.hook';
import { ClientNewSchema } from './client-new.schema';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { unmask } from '@/shared/utils/masks/unmask';

type clientNewSchemaValues = typeof ClientNewSchema._type;

export function useClientNew() {
	const {
		handlers: { request },
	} = useHttp();
	const clientService = new ClientService();

	const navigate = useNavigate();

	const handleSubmit = async (values: clientNewSchemaValues) => {
		const response = await request(() =>
			clientService.create({ ...values, cpf: unmask(values.cpf), phone_number: unmask(values.phone_number) }),
		);
		if (!response) return;

		toast.success(response.message);
		navigate('/client/report');
	};

	return { handlers: { handleSubmit } };
}

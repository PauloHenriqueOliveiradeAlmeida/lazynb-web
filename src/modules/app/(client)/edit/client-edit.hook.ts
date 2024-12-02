import { ClientService } from '@/shared/services/http/client/client.service';
import { ClientEditSchema } from './client-edit.schema';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '@/shared/services/http/http.hook';
import { unmask } from '@/shared/utils/masks/unmask';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { IGetClientResponseModel } from '@/shared/services/http/client/models/client-response.model';

type clientEditSchemaValues = typeof ClientEditSchema._type;

export function useClientEdit() {
	const [client, setClient] = useState<IGetClientResponseModel>();
	const {
		handlers: { request },
	} = useHttp();
	const clientService = useMemo(() => new ClientService(), []);

	const navigate = useNavigate();
	const params = useParams();

	const handleSubmit = async (values: clientEditSchemaValues) => {
		const response = await request(() =>
			clientService.update(params.id as string, {
				...values,
				cpf: unmask(values.cpf),
				phone_number: unmask(values.phone_number),
			}),
		);
		if (!response) return;

		toast.success(response.message);
		navigate('/client/report');
	};

	const getClient = useCallback(async () => {
		const response = await request(() => clientService.get(params.id as string));
		if (!response) return;

		setClient(response);
	}, [params.id, request, clientService]);

	useEffect(() => {
		if (!params.id) navigate('/client/report');
		getClient();
	}, [params.id, navigate, getClient]);

	return { states: { client }, handlers: { handleSubmit } };
}

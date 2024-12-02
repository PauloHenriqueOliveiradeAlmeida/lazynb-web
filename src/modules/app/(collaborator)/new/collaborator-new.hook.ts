import { CollaboratorService } from '@/shared/services/http/collaborator/collaborator.service';
import { CollaboratorNewSchema } from './collaborator-new.schema';
import { useHttp } from '@/shared/services/http/http.hook';
import { useNavigate } from 'react-router-dom';
import { unmask } from '@/shared/utils/masks/unmask';
import { toast } from 'react-toastify';

type collaboratorNewSchemaValues = typeof CollaboratorNewSchema._type;

export function useCollaboratorNew() {
	const {
		handlers: { request },
	} = useHttp();
	const collaboratorService = new CollaboratorService();

	const navigate = useNavigate();

	const handleSubmit = async (values: collaboratorNewSchemaValues) => {
		const response = await request(() =>
			collaboratorService.create({ ...values, cpf: unmask(values.cpf), phone_number: unmask(values.phone_number) }),
		);
		if (!response) return;

		toast.success(response.message);
		navigate('/collaborator/report');
	};

	return { handlers: { handleSubmit } };
}

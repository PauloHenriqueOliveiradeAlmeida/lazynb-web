import { CollaboratorSchema } from './collaborator.schema';
import { useHttp } from '@/shared/services/http/http.hook';
import { toast } from 'react-toastify';
import { CollaboratorService } from '@/shared/services/http/collaborator/collaborator.service';

type collaboratorSchemaValues = typeof CollaboratorSchema._type;

export function useCollaboratorRegisterPage() {
	const {
		handlers: { request },
	} = useHttp();
	const collaboratorService = new CollaboratorService();

	const handleSubmit = async (values: collaboratorSchemaValues) => {
		console.log(values);
		const response = await request(() => collaboratorService.create(values));
		console.log(response);
		toast.success(response?.accessToken);
	};

	return {
		handlers: { handleSubmit },
	};
}

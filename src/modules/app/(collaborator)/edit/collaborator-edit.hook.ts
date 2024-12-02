import { CollaboratorService } from '@/shared/services/http/collaborator/collaborator.service';
import { CollaboratorEditSchema } from './collaborator-edit.schema';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '@/shared/services/http/http.hook';
import { unmask } from '@/shared/utils/masks/unmask';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { IGetCollaboratorResponseModel } from '@/shared/services/http/collaborator/models/collaborator-response.model';

type collaboratorEditSchemaValues = typeof CollaboratorEditSchema._type;

export function useCollaboratorEdit() {
	const [collaborator, setCollaborator] = useState<IGetCollaboratorResponseModel>();
	const {
		handlers: { request },
	} = useHttp();
	const collaboratorService = useMemo(() => new CollaboratorService(), []);

	const navigate = useNavigate();
	const params = useParams();

	const handleSubmit = async (values: collaboratorEditSchemaValues) => {
		const response = await request(() =>
			collaboratorService.update(params.id as string, {
				...values,
				cpf: unmask(values.cpf),
				phone_number: unmask(values.phone_number),
			}),
		);
		if (!response) return;

		toast.success(response.message);
		navigate('/collaborator/report');
	};

	const getCollaborator = useCallback(async () => {
		const response = await request(() => collaboratorService.get(params.id as string));
		if (!response) return;

		setCollaborator(response);
	}, [params.id, request, collaboratorService]);

	useEffect(() => {
		if (!params.id) navigate('/collaborator/report');
		getCollaborator();
	}, [params.id, navigate, getCollaborator]);

	return { states: { collaborator }, handlers: { handleSubmit } };
}

import { ButtonBubble } from '@/shared/components/button-bubble/button-bubble.component';
import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCollaboratorReport } from './collaborator-report.hook';
import { InputControlled } from '@/shared/components/input-controlled/input-controlled.component';
import { phoneMask } from '@/shared/utils/masks/phone.mask';
import { cpfMask } from '@/shared/utils/masks/cpf.mask';

export function CollaboratorReportPage() {
	const {
		states: { filteredCollaborators, search },
		handlers: { handleSearch, handleDelete, navigate },
	} = useCollaboratorReport();

	return (
		<main className='flex flex-col w-full h-screen justify-center items-center gap-10 bg-white p-24'>
			<h1 className='text-2xl font-bold'>Colaboradores Cadastrados</h1>

			<div className='bg-white w-full max-w-5xl p-8 rounded-md shadow-lg'>
				<InputControlled
					value={search}
					onChange={handleSearch}
					placeholder='Pesquisar por nome'
					icon={<MagnifyingGlassIcon />}
				/>
			</div>

			<table className='w-full max-w-5xl text-center shadow-lg rounded-md overflow-hidden'>
				<thead className='bg-primary'>
					<tr className='text-white'>
						<th className='p-4'>Nome</th>
						<th className='p-4'>Número de telefone</th>
						<th className='p-4'>Email</th>
						<th className='p-4'>CPF</th>
						<th className='p-4'>Administrador</th>
						<th className='p-4'>Ações</th>
					</tr>
				</thead>
				<tbody>
					{filteredCollaborators.length === 0 && (
						<tr className='text-center text-xl font-bold'>
							<td colSpan={6} className='p-4'>
								<div className='flex flex-col gap-4 items-center'>
									Sem colaboradores cadastrados
									<ButtonLink
										label='Cadastrar novo colaborador'
										variant='filled'
										to='/collaborator/new'
										className='w-80'
									/>
								</div>
							</td>
						</tr>
					)}
					{filteredCollaborators?.map((collaborator) => (
						<tr key={collaborator.id} className='border border-primary'>
							<td className='p-4'>{collaborator.name}</td>
							<td className='p-4'>{phoneMask(collaborator.phone_number)}</td>
							<td className='p-4'>{collaborator.email}</td>
							<td className='p-4'>{cpfMask(collaborator.cpf)}</td>
							<td className='p-4'>{collaborator.is_admin ? 'Sim' : 'Não'}</td>
							<td className='p-4'>
								<div className='flex gap-4 text-lg'>
									<PencilIcon
										className='cursor-pointer'
										onClick={() => navigate(`/collaborator/${collaborator.id}/edit`)}
									/>
									<TrashIcon className='cursor-pointer' onClick={() => handleDelete(collaborator.id)} />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ButtonBubble to='/collaborator/new' icon={<PlusIcon />} className='fixed bottom-10 right-10' />
		</main>
	);
}

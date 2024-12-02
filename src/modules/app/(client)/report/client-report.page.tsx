import { phoneMask } from '@/shared/utils/masks/phone.mask';
import { useClientReport } from './client-report.hook';
import { cpfMask } from '@/shared/utils/masks/cpf.mask';
import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { ButtonBubble } from '@/shared/components/button-bubble/button-bubble.component';
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { InputControlled } from '@/shared/components/input-controlled/input-controlled.component';

export function ClientReportPage() {
	const {
		states: { filteredClients, search },
		handlers: { handleSearch, handleDelete, navigate },
	} = useClientReport();

	return (
		<main className="flex flex-col justify-center items-center flex-1 h-screen gap-10 bg-white p-6">
			<h1 className="text-2xl font-bold text-secondary">Clientes Cadastrados</h1>

			<div className="bg-white w-full max-w-5xl p-8 rounded-md shadow-lg">
				<InputControlled
					value={search}
					onChange={handleSearch}
					placeholder="Pesquisar por nome"
					icon={<MagnifyingGlassIcon />}
				/>
			</div>

			<table className="w-full max-w-5xl text-center shadow-lg rounded-md overflow-hidden">
				<thead className="bg-primary">
					<tr className="text-white">
						<th className="p-4">Nome</th>
						<th className="p-4">Número de telefone</th>
						<th className="p-4">Email</th>
						<th className="p-4">CPF</th>
						<th className="p-4">Ações</th>
					</tr>
				</thead>
				<tbody>
					{filteredClients.length === 0 && (
						<tr className="text-center text-xl font-bold">
							<td colSpan={5} className="p-4">
								<div className="flex flex-col gap-4 items-center">
									Sem clientes cadastrados
									<ButtonLink
										label="Cadastrar novo cliente"
										variant="filled"
										to="/client/new"
										className="w-80"
									/>
								</div>
							</td>
						</tr>
					)}
					{filteredClients.map((client) => (
						<tr key={client.id} className="border border-primary">
							<td className="p-4">{client.name}</td>
							<td className="p-4">{phoneMask(client.phone_number)}</td>
							<td className="p-4">{client.email}</td>
							<td className="p-4">{cpfMask(client.cpf)}</td>
							<td className="p-4">
								<div className="flex gap-2 justify-center items-center text-lg">
									<PencilIcon
										className="w-6 cursor-pointer"
										onClick={() => navigate(`/client/${client.id}/edit`)}
									/>
									<TrashIcon
										className="w-6 cursor-pointer"
										onClick={() => handleDelete(client.id)}
									/>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ButtonBubble to="/client/new" icon={<PlusIcon />} className="fixed bottom-10 right-10" />
		</main>
	);
}

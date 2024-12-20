import { usePropertyReport } from './property-report.hook';
import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { ButtonBubble } from '@/shared/components/button-bubble/button-bubble.component';
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { InputControlled } from '@/shared/components/input-controlled/input-controlled.component';
import { cepMask } from '@/shared/utils/masks/cep.mask';

export function PropertyReportPage() {
	const {
		states: { filteredProperties, search },
		handlers: { handleSearch, handleDelete, navigate },
	} = usePropertyReport();

	return (
		<main className="flex flex-col justify-center items-center flex-1 h-screen gap-10 bg-white p-6">
			<h1 className="text-2xl font-bold text-secondary">Propriedades Cadastradas</h1>
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
						<th className="p-4">Proprietário</th>
						<th className="p-4">CEP</th>
						<th className="p-4">Cidade - UF</th>
						<th className="p-4">Bairro - Número</th>
						<th className="p-4">Ações</th>
					</tr>
				</thead>
				<tbody>
					{filteredProperties.length === 0 && (
						<tr className="text-center text-xl font-bold">
							<td colSpan={6} className="p-4">
								<div className="flex flex-col gap-4 items-center">
									Sem propriedades cadastradas
									<ButtonLink
										label="Cadastrar nova propriedade"
										variant="filled"
										to="/property/new"
										className="w-80"
									/>
								</div>
							</td>
						</tr>
					)}
					{filteredProperties.map((property) => (
						<tr key={property.id} className="border border-primary">
							<td className="p-4">{property.name}</td>
							<td className="p-4">{property.client_name}</td>
							<td className="p-4">{cepMask(property.cep)}</td>
							<td className="p-4">
								{property.city} - {property.uf?.toUpperCase()}
							</td>
							<td className="p-4">
								{property.neighborhood} - {property.address_number}
							</td>
							<td className='p-4 w-[8%]'>
								<div className='flex gap-4 text-sm'>
									<PencilIcon className='cursor-pointer' onClick={() => navigate(`/property/${property.id}/edit`)} />
									<TrashIcon className='cursor-pointer' onClick={() => handleDelete(property.id)} />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ButtonBubble to="/property/new" icon={<PlusIcon />} className="fixed bottom-10 right-10" />
		</main>
	);
}

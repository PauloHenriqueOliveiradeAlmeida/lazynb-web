import { useFormContext } from '@/shared/layouts/form/form.hook';
import { usePropertyEdit } from './property-edit.hook';
import { Formik, Form } from 'formik';
import { Input } from '@/shared/components/input/input.component';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { PropertyEditSchema } from './property-edit.schema';
import { UfEnum } from '@/shared/enums/uf.enum';
import { cepMask } from '@/shared/utils/masks/cep.mask';
import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { Button } from '@/shared/components/button/button.component';
import LazySelect from 'react-select';
import { Select } from '@/shared/components/select/select.component';
import { unmask } from '@/shared/utils/masks/unmask';

export function PropertyEditPage() {
	const {
		handlers: { setFormPageTitle },
	} = useFormContext();
	setFormPageTitle('Editar propriedade');

	const {
		states: { property, clientsOptions, amenitiesOptions },
		handlers: { handleSubmit, handleGetCep },
	} = usePropertyEdit();

	return (
		<main className='w-[80%]'>
			<Formik
				initialValues={{
					name: property?.name || '',
					description: property?.description || '',
					cep: unmask(property?.cep || ''),
					neighborhood: property?.neighborhood || '',
					address_number: property?.address_number || 0,
					complement: property?.complement || undefined,
					city: property?.city || '',
					uf: property?.uf || UfEnum.SP,
					clientid: property?.clientid || 0,
					amenities: property?.amenities || ([] as number[]),
				}}
				validationSchema={toFormikValidationSchema(PropertyEditSchema)}
				validateOnChange
				enableReinitialize
				onSubmit={handleSubmit}
			>
				{({ values, setFieldValue }) => (
					<Form className='flex flex-col gap-10'>
						<Input name='name' placeholder='Nome' />
						<Input name='description' placeholder='Descrição' />
						<Input
							name='cep'
							placeholder='CEP'
							format={cepMask}
							onBlur={() => handleGetCep(unmask(values.cep), setFieldValue)}
						/>
						<Input name='neighborhood' placeholder='Bairro' />
						<div className='flex gap-4 w-full items-center'>
							<Input name='complement' placeholder='Complemento' className='w-full' />
							<Input name='address_number' placeholder='Nº' type='number' className='w-1/5' />
						</div>
						<div className='flex gap-4 w-full items-center'>
							<Input name='city' placeholder='Cidade' className='w-full' />
							<Select
								name='uf'
								options={Object.entries(UfEnum).map(([value, label]) => ({ value, label }))}
								placeholder='UF'
								className='w-1/5'
							/>
						</div>
						<LazySelect
							className='border-primary border bg-transparent rounded-md w-full outline-none'
							styles={{ control: (styles) => ({ ...styles, backgroundColor: 'transparent', outline: 'none' }) }}
							name='amenities'
							options={amenitiesOptions}
							placeholder='Selecione as comodidades'
							isMulti
							value={amenitiesOptions.filter((option) => values.amenities.includes(option.value))}
							onChange={(selectedOptions) => {
								setFieldValue('amenities', selectedOptions ? selectedOptions.map((option) => option.value) : []);
							}}
						/>
						<LazySelect
							className='border-primary border bg-transparent rounded-md w-full outline-none'
							styles={{ control: (styles) => ({ ...styles, backgroundColor: 'transparent', outline: 'none' }) }}
							name='clientid'
							options={clientsOptions}
							placeholder='Selecione um Cliente'
							value={clientsOptions.find((option) => option.value === values.clientid) || null}
							onChange={(selectedOption) => {
								setFieldValue('clientid', selectedOption ? selectedOption.value : 0);
							}}
						/>
						<div className='flex justify-around items-center gap-4'>
							<ButtonLink label='Voltar' variant='outlined' fullWidth to='/property/report' />
							<Button label='Cadastrar' variant='filled' fullWidth />
						</div>
					</Form>
				)}
			</Formik>
		</main>
	);
}

import { useFormContext } from '@/shared/layouts/form/form.hook';
import { usePropertyNew } from './property-new.hook';
import { Formik, Form } from 'formik';
import { Input } from '@/shared/components/input/input.component';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { PropertyNewSchema } from './property-new.schema';
import { UfEnum } from '@/shared/enums/uf.enum';
import { cepMask } from '@/shared/utils/masks/cep.mask';
import { ButtonLink } from '@/shared/components/button-link/button-link.component';
import { Button } from '@/shared/components/button/button.component';
import Select from 'react-select';

export function PropertyNewPage() {
  const {
    handlers: { setFormPageTitle },
  } = useFormContext();
  setFormPageTitle('Cadastrar propriedade');

  const {
    handlers: { handleSubmit },
    amenitiesOptions, clientsOptions
  } = usePropertyNew();

  return (
    <main className='w-[80%]'>
      <Formik
        initialValues={{
          name: '',
          description: '',
          cep: '',
          neighborhood: '',
          address_number: 0,
          complement: '',
          city: '',
          uf: UfEnum.SP,
          clientid: 0,
          amenities: [] as number[],
        }}
        validationSchema={toFormikValidationSchema(PropertyNewSchema)}
        validateOnChange
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className='flex flex-col gap-10'>
            <Input name='name' placeholder='Nome' />
            <Input name='description' placeholder='Descrição' />
            <Input name='cep' placeholder='CEP' format={cepMask} />
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

            <Select
              className='border-primary border bg-transparent rounded-md w-full outline-none'
              name="amenities"
              options={amenitiesOptions}
              placeholder="Selecione as amenities"
              isMulti
              value={amenitiesOptions.filter(option =>
                values.amenities.includes(option.value)
              )}
              onChange={(selectedOptions) => {
                setFieldValue(
                  'amenities',
                  selectedOptions ? selectedOptions.map(option => option.value) : []
                );
              }}
            />

            <Select
              name="clientid"
              options={clientsOptions}
              placeholder="Selecione um Cliente"
              value={clientsOptions.find(option => option.value === values.clientid) || null}
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

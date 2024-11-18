import { Input } from '@/shared/components/input/input.component';
import { Button } from '../../../../shared/components/button/button.component';
import { useAuthContext } from '../../providers/contexts/auth.hook';
import { InputPassword } from '@/shared/components/input-password/input-password.component';
import { Formik, Form, Field } from 'formik';
import { CollaboratorSchema } from './collaborator.schema';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useCollaboratorRegisterPage } from './collaborator.hook';


export function CollaboratorRegisterPage() {
	const {
		handlers: { setAuthPageTitle },
	} = useAuthContext();
	const { handlers } = useCollaboratorRegisterPage();
	setAuthPageTitle('Faça seu Login');

	return (
		<main className='w-96'>
			<Formik
				initialValues={{}}
				validationSchema={toFormikValidationSchema(CollaboratorSchema)}
				validateOnChange
				onSubmit={handlers.handleSubmit}
			>
				<Form className='flex flex-col gap-16'>
					<Input name='name' placeholder='Nome' />
					<Input name='cpf' placeholder='CPF'/>
					<Input name='phone_number' placeholder='Celular'/>
					<Input name='email' placeholder='Email' />
					<div>
						<InputPassword name='password' placeholder='Senha' />
					</div>
					<div className='flex items-center gap-4'>
						<label className='font-medium'>Administrador?</label>
						<Field type='checkbox' name='is_admin' />
					</div>
					<div className='flex justify-around items-center'>
						<Button label='Registrar' variant='filled' fullWidth />
					</div>
				</Form>
			</Formik>
		</main>
	);
}

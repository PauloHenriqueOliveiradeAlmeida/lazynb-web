import { ClientReportPage } from '@/modules/app/(client)/report/client-report.page';
import { Route, Routes } from 'react-router-dom';
import { FormProvider } from '../layouts/form/form.context';
import { FormLayout } from '../layouts/form/form.layout';
import { ClientNewPage } from '@/modules/app/(client)/new/client-new.page';
import { ClientEditPage } from '@/modules/app/(client)/edit/client-edit.page';
import { CollaboratorReportPage } from '@/modules/app/(collaborator)/report/collaborator-report.page';
import { CollaboratorNewPage } from '@/modules/app/(collaborator)/new/collaborator-new.page';
import { CollaboratorEditPage } from '@/modules/app/(collaborator)/edit/collaborator-edit.page';

export function AppRoute() {
	return (
		<Routes>
			<Route path='/client/report' element={<ClientReportPage />} />
			<Route path='/collaborator/report' element={<CollaboratorReportPage />} />

			<Route
				path='*'
				element={
					<FormProvider>
						<Routes>
							<Route element={<FormLayout />}>
								<Route path='/client/new' element={<ClientNewPage />} />
								<Route path='/client/:id/edit' element={<ClientEditPage />} />
								<Route path='/collaborator/new' element={<CollaboratorNewPage />} />
								<Route path='/collaborator/:id/edit' element={<CollaboratorEditPage />} />
							</Route>
						</Routes>
					</FormProvider>
				}
			/>
		</Routes>
	);
}

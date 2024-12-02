import { ClientReportPage } from '@/modules/app/(client)/report/client-report.page';
import { Route, Routes } from 'react-router-dom';
import { FormProvider } from '../layouts/form/form.context';
import { FormLayout } from '../layouts/form/form.layout';
import { ClientNewPage } from '@/modules/app/(client)/new/client-new.page';
import { ClientEditPage } from '@/modules/app/(client)/edit/client-edit.page';
import { CollaboratorReportPage } from '@/modules/app/(collaborator)/report/collaborator-report.page';
import { CollaboratorNewPage } from '@/modules/app/(collaborator)/new/collaborator-new.page';
import { CollaboratorEditPage } from '@/modules/app/(collaborator)/edit/collaborator-edit.page';
import { PropertyReportPage } from '@/modules/app/(property)/report/property-report.page';
import { PropertyNewPage } from '@/modules/app/(property)/new/property-new.page';
import { PropertyEditPage } from '@/modules/app/(property)/edit/property-edit.page';
import { AppLayout } from '@/modules/app/(appLayout)/app-layout.page';
import { HomePage } from '@/modules/app/(home)/home.page';

export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
				<Route index element={<HomePage />} />
        <Route path="client/report" element={<ClientReportPage />} />
        <Route path="collaborator/report" element={<CollaboratorReportPage />} />
        <Route path="property/report" element={<PropertyReportPage />} />
      </Route>

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
								<Route path='/property/new' element={<PropertyNewPage />} />
								<Route path='/property/:id/edit' element={<PropertyEditPage />} />
							</Route>
						</Routes>
					</FormProvider>
				}
			/>
    </Routes>
  );
}

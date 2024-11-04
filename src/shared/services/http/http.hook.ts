import { useBaseContext } from '@/shared/layouts/base/base.hook';
import { AxiosResponse, isAxiosError } from 'axios';
import { toast } from 'react-toastify';

export function useHttp() {
	const {
		handlers: { setIsLoading },
	} = useBaseContext();
	const request = async <T>(service: () => Promise<AxiosResponse<T>>) => {
		try {
			setIsLoading(true);

			const { data } = await service();
			return data;
		} catch (error) {
			if (isAxiosError(error)) toast.error(error.response?.data.message);
		} finally {
			setIsLoading(false);
		}
	};

	return { handlers: { request } };
}

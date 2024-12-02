import { useBaseContext } from '@/shared/layouts/base/base.hook';
import { AxiosResponse, isAxiosError } from 'axios';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export function useHttp() {
	const {
		handlers: { setIsLoading },
	} = useBaseContext();
	const request = useCallback(
		async <T>(service: () => Promise<AxiosResponse<T>>) => {
			try {
				setIsLoading(true);

				const { data } = await service();
				return data;
			} catch (error) {
				if (isAxiosError(error)) toast.error(error.response?.data.message);
			} finally {
				setIsLoading(false);
			}
		},
		[setIsLoading],
	);

	return { handlers: { request } };
}

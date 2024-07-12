import api from '@api/api.ts';
import type { AxiosResponse } from 'axios';

import type { RequestConfig, SignInDto, SignInResponse } from '@/@types/api';

export type SignInUserConfig = RequestConfig<SignInDto>;
export const signInUser = ({
  params
}: SignInUserConfig): Promise<AxiosResponse<SignInResponse>> => {
  return api.post('/users/signin', params);
};

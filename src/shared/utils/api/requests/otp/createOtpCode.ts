import api from '@api/api.ts';
import type { AxiosResponse } from 'axios';

import type { CreateOtpDto, OtpResponse, RequestConfig } from '@/@types/api';

export type CreateOtpCodeConfig = RequestConfig<CreateOtpDto>;

export const createOtpCode = ({
  params
}: CreateOtpCodeConfig): Promise<AxiosResponse<OtpResponse>> => {
  return api.post('/auth/otp', params);
};

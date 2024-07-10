import axiosInstance from '@restapi/axiosInstance.ts';
import type { AxiosResponse } from 'axios';

import type {
  CreateOtpRequestPayload,
  CreateOtpRequestResponse,
  RequestConfig
} from '@/@types/api';

export type CreateOtpCodeConfig = RequestConfig<CreateOtpRequestPayload>;

export const createOtpCode = ({
  params
}: CreateOtpCodeConfig): Promise<AxiosResponse<CreateOtpRequestResponse>> => {
  return axiosInstance.post('/auth/otp', params);
};

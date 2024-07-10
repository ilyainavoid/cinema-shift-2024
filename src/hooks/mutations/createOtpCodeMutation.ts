import type { CreateOtpCodeConfig } from '@restapi/otps/createOtpCode.ts';
import { createOtpCode } from '@restapi/otps/createOtpCode.ts';
import { useMutation } from '@tanstack/react-query';

export const useCreateOtpCodeMutation = () =>
  useMutation({
    mutationFn: (config: CreateOtpCodeConfig) => createOtpCode(config)
  });

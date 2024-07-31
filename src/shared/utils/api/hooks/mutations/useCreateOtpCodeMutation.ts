import type { CreateOtpCodeConfig } from '@api/requests/otp/createOtpCode.ts';
import { createOtpCode } from '@api/requests/otp/createOtpCode.ts';
import { useMutation } from '@tanstack/react-query';

export const useCreateOtpCodeMutation = () =>
  useMutation({
    mutationFn: (config: CreateOtpCodeConfig) => createOtpCode(config)
  });

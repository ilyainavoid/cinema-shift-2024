import type { CreateOtpCodeConfig } from '@api/requests/otp';
import { createOtpCode } from '@api/requests/otp';
import { useMutation } from '@tanstack/react-query';

export const useCreateOtpCodeMutation = () =>
  useMutation({
    mutationFn: (config: CreateOtpCodeConfig) => createOtpCode(config)
  });

import { createOtpCode } from '@restapi/otps/createOtpCode.ts';
import { useQuery } from '@tanstack/react-query';

import type { CreateOtpRequestPayload } from '@/@types/api';

export const useCreateOtpCodeQuery = (params: CreateOtpRequestPayload) => {
  const query = useQuery({
    queryKey: ['createOtpCode'],
    queryFn: () => createOtpCode({ params }),
    select: (data) => data
  });

  return { ...query };
};

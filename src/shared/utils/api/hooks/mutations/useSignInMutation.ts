import type { SignInUserConfig } from '@api/requests/user/signInUser.ts';
import { signInUser } from '@api/requests/user/signInUser.ts';
import { useMutation } from '@tanstack/react-query';

export const useSignInMutation = () =>
  useMutation({
    mutationFn: (config: SignInUserConfig) => signInUser(config)
  });

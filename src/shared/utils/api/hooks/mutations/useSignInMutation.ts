import type { SignInUserConfig } from '@api/requests/user';
import { signInUser } from '@api/requests/user';
import { useMutation } from '@tanstack/react-query';

export const useSignInMutation = () =>
  useMutation({
    mutationFn: (config: SignInUserConfig) => signInUser(config)
  });

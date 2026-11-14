'use client';

import { useMutation } from '@tanstack/react-query';
import { loginClinicOwner, registerClinicOwner } from '@/services/auth.service';
import { ClinicLoginInput, ClinicRegisterInput } from '@/types/auth';

export function useClinicLogin() {
  return useMutation({
    mutationFn: (input: ClinicLoginInput) => loginClinicOwner(input),
  });
}

export function useClinicRegister() {
  return useMutation({
    mutationFn: (input: ClinicRegisterInput) => registerClinicOwner(input),
  });
}


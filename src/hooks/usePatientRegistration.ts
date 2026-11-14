'use client';

import { useMutation } from '@tanstack/react-query';
import { requestPatientOtp, verifyPatientOtp, registerPatientProfile } from '@/services/patient.service';
import { PatientProfile } from '@/types/patient';

export function useRequestPatientOtp() {
  return useMutation({
    mutationFn: (identifier: string) => requestPatientOtp(identifier),
  });
}

export function useVerifyPatientOtp() {
  return useMutation({
    mutationFn: ({ identifier, code }: { identifier: string; code: string }) =>
      verifyPatientOtp(identifier, code),
  });
}

export function useRegisterPatientProfile() {
  return useMutation({
    mutationFn: (profile: PatientProfile) => registerPatientProfile(profile),
  });
}


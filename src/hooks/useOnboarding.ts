'use client';

import { useMutation } from '@tanstack/react-query';
import { submitClinicOnboarding } from '@/services/onboarding.service';
import { OnboardingState } from '@/types/onboarding';

export function useOnboarding() {
  return useMutation({
    mutationFn: (data: OnboardingState) => submitClinicOnboarding(data),
  });
}


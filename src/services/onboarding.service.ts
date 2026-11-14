import { OnboardingState } from '@/types/onboarding';

export async function submitClinicOnboarding(data: OnboardingState): Promise<{ success: boolean; clinicId: string }> {
  void data;
  // Simulate API post
  await new Promise((res) => setTimeout(res, 400));
  return {
    success: true,
    clinicId: `cln_${Date.now()}`,
  };
}


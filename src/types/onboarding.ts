export type OnboardingStepNumber = 1 | 2 | 3;

export interface BusinessInfoPayload {
  clinicName: string;
  contactEmail: string;
  contactPhone: string;
  clinicAddress: string;
}

export interface LicenseVerificationPayload {
  licenseNumber?: string;
  issuingAuthority?: string;
  licenseFileName?: string;
  licenseFileUrl?: string;
}

export interface ClinicSetupPayload {
  specialties: string;
  acceptTerms: boolean;
}

export interface OnboardingState {
  currentStep: OnboardingStepNumber;
  businessInfo: BusinessInfoPayload;
  licenseVerification: LicenseVerificationPayload;
  clinicSetup: ClinicSetupPayload;
  isSubmitted: boolean;
}


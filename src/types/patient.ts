export type AuthRegistrationMethod = 'phone' | 'email';

export interface PatientProfile {
  id?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone?: string;
  email?: string;
}

export interface PatientRegistrationState {
  authMethod: AuthRegistrationMethod;
  identifier: string; // Phone number or Email
  otpSent: boolean;
  otpVerified: boolean;
  profile: PatientProfile;
}


export type AuthMode = 'register' | 'login';

export interface ClinicRegisterInput {
  clinicName: string;
  registrationId: string;
  contactName: string;
  email: string;
  phone: string;
  password: string;
  termsAccepted: boolean;
}

export interface ClinicLoginInput {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ClinicOwnerUser {
  id: string;
  clinicName: string;
  registrationId: string;
  contactName: string;
  email: string;
}


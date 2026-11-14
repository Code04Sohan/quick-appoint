import { ClinicLoginInput, ClinicRegisterInput, ClinicOwnerUser } from '@/types/auth';

export async function loginClinicOwner(input: ClinicLoginInput): Promise<{ user: ClinicOwnerUser; token: string }> {
  await new Promise((res) => setTimeout(res, 400));
  return {
    token: 'mock-jwt-token-12345',
    user: {
      id: 'owner-1',
      clinicName: 'Apex Health Center',
      registrationId: 'MED-NY-8972',
      contactName: 'Dr. Jane Doe',
      email: input.email,
    },
  };
}

export async function registerClinicOwner(input: ClinicRegisterInput): Promise<{ user: ClinicOwnerUser; token: string }> {
  await new Promise((res) => setTimeout(res, 400));
  return {
    token: 'mock-jwt-token-67890',
    user: {
      id: `owner_${Date.now()}`,
      clinicName: input.clinicName,
      registrationId: input.registrationId,
      contactName: input.contactName,
      email: input.email,
    },
  };
}


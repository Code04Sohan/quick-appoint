import { PatientProfile } from '@/types/patient';

export async function requestPatientOtp(identifier: string): Promise<{ success: boolean; message: string }> {
  await new Promise((res) => setTimeout(res, 300));
  return {
    success: true,
    message: `Verification code sent to ${identifier}`,
  };
}

export async function verifyPatientOtp(identifier: string, code: string): Promise<{ success: boolean; valid: boolean }> {
  await new Promise((res) => setTimeout(res, 300));
  // Any 6-digit code or demo 123456
  return {
    success: true,
    valid: code.length === 6,
  };
}

export async function registerPatientProfile(profile: PatientProfile): Promise<{ success: boolean; patientId: string }> {
  void profile;
  await new Promise((res) => setTimeout(res, 400));
  return {
    success: true,
    patientId: `pat_${Date.now()}`,
  };
}


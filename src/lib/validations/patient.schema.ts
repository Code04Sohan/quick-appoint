import { z } from 'zod';

export const phoneOtpRequestSchema = z.object({
  phone: z.string().min(10, 'Please enter a valid 10-digit mobile number'),
});

export const emailOtpRequestSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export const otpVerifySchema = z.object({
  code: z.string().length(6, 'Verification code must be exactly 6 digits'),
});

export const patientProfileSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
});

export type PatientProfileValues = z.infer<typeof patientProfileSchema>;


import { z } from 'zod';

export const clinicRegisterSchema = z.object({
  clinicName: z.string().min(2, 'Official clinic name is required'),
  registrationId: z.string().min(3, 'Registration / License ID is required'),
  contactName: z.string().min(2, 'Primary contact name is required'),
  email: z.string().email('Please enter a valid work email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the Terms of Service & Privacy Policy',
  }),
});

export const clinicLoginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

export type ClinicRegisterValues = z.infer<typeof clinicRegisterSchema>;
export type ClinicLoginValues = z.infer<typeof clinicLoginSchema>;


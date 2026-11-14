import { z } from 'zod';

export const businessInfoSchema = z.object({
  clinicName: z.string().min(2, 'Clinic name must be at least 2 characters'),
  contactEmail: z.string().email('Please enter a valid work email address'),
  contactPhone: z.string().min(7, 'Please enter a valid phone number'),
  clinicAddress: z.string().min(8, 'Please enter full clinic address with city & postal code'),
});

export const licenseVerificationSchema = z.object({
  licenseNumber: z.string().min(3, 'License / Registration ID is required'),
  issuingAuthority: z.string().optional(),
  licenseFileName: z.string().min(1, 'Please upload a license document (PDF/JPG/PNG)'),
});

export const clinicSetupSchema = z.object({
  specialties: z.string().min(2, 'Please list at least one medical specialty'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the Trust & Safety terms',
  }),
});

export type BusinessInfoValues = z.infer<typeof businessInfoSchema>;
export type LicenseVerificationValues = z.infer<typeof licenseVerificationSchema>;
export type ClinicSetupValues = z.infer<typeof clinicSetupSchema>;


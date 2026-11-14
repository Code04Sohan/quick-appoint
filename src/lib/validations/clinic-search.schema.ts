import { z } from 'zod';

export const clinicSearchSchema = z.object({
  search: z.string().optional(),
  specialty: z.string().optional(),
  distance: z.string().optional(),
  filter: z.enum(['all', 'top-rated', 'shortest-wait', 'open-now']).default('all'),
});

export type ClinicSearchValues = z.infer<typeof clinicSearchSchema>;


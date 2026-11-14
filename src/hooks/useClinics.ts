'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchClinics } from '@/services/clinic.service';
import { ClinicFilterParams } from '@/types/clinic';

export function useClinics(filters?: ClinicFilterParams) {
  return useQuery({
    queryKey: ['clinics', filters],
    queryFn: () => fetchClinics(filters),
    staleTime: 1000 * 60 * 5, // 5 mins
  });
}

